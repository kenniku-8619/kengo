'use server'

import { createClient } from "@/supabase/server"
import { revalidatePath } from "next/cache"
import { NextRequest } from "next/server"
import { redirect } from "next/navigation"

export type Profile = {
    id: string;
    first_name: string;
    second_name: string;
    telephone: number;
}

export const getUserProfile = async (): Promise<Profile | null> =>{
    const supabase = await createClient();
    const { data: authData } = await supabase.auth.getUser();
    const user = authData?.user;
    const { data, error } = await supabase
        .from('user')
        .select('*')
        .eq('id', user?.id)
        .single();
    return data;
}

export async function Logout(req: NextRequest) {
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (user) {
        await supabase.auth.signOut()
    }

    revalidatePath('/', 'layout')
    redirect('/')
}

export const handleUserInfoSumit = async(formData: FormData) => {
    const supabase = await createClient();
    const data = {
        first_name: formData.get('first_name') as string,
        second_name: formData.get('second_name') as string,
        telephone: formData.get('telephone') as string,
    }

    const {data: userData } = await supabase.auth.getUser();
    const user = userData?.user;
    //

    const { data: Profile, error } = await supabase.from('user').upsert({
        id: user?.id,
        first_name: data.first_name,
        second_name: data.second_name,
        telephone: data.telephone,
    }, {
        onConflict:'id'
    });
}