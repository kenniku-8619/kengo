import Link from "next/link";

export default function LoginPage(){
    return(
        <div className="h-[100vh] flex flex-col items-center">
            <h1 className="text5xl">ログイン画面</h1>
            <p>ID</p>
            <input type="text" className="border" placeholder="(例)rectangle"/>
            <p>パスワード</p>
            <input type="password" className="border" placeholder="(例)password"/>
            <Link href='/'>戻る</Link>
            <Link href='home'>ログイン</Link>
        </div>
    )
}