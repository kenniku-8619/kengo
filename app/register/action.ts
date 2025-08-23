'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/supabase/server'

export async function Signup(formData: FormData) {
    const supabase = await createClient()

    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const username = formData.get('username') as string

    const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                username: username,
            }
        }
    });

    //1.サインアップ処理でエラーが発生した場合
    if (authError) {
        console.error('サインアップエラー:', authError.message);
        return redirect(`/register?error=${encodeURIComponent('サインアップに失敗しました。' + authError.message)}`);
    }

    //2. ユーザーデータが返されなかった場合(メール認証が有効な状態)
    //ユーザーが確認メールクリックするまでauthData.userはnullになるのが一般的です。
    //この場合は、登録成功メッセージを表示するページにリダイレクトします。
    if (!authData.user) {
        //成功したが、確認メールが必要な状態
        //ユーザーに確認メールをするよう促すページにリダイレクト
        return redirect ('/massage?type=success&text=' + encodeURIComponent('登録が完了しました。確認メールをチェックしてください。'));
    }

    //3. ユーザー登録が成功し、`authData.user`も存在する場合
    //この場合のみ、`user`テーブルでの追加処理を行います
    if (authData.user) {
        const {error: profileError } = await supabase
        .from('user')
        .insert({
            id: authData.user.id,
            username: username,
            updated_at: new Date().toISOString(),
        });

        if (profileError) {
            console.error('プロフィール作成エラー:', profileError.message);
            //この場合、auth登録は成功しているがプロフィール作成に失敗した状態
            return redirect(`/register?error=${encodeURIComponent('プロフィールの作成に失敗しました。' + profileError.message)}`);
        }
    }

    //
    revalidatePath('/', 'layout')
    redirect('/login')
}