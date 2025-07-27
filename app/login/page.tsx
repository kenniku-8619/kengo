import Link from "next/link";
import {Login} from "./action";

export default function LoginPage(){
    return(
        <div className="h-[100vh] flex flex-col items-center bg-gray-100">
            <h1 className="text-3xl my-10 font-black">ログイン画面</h1>
            <form className="bg-orange-500 text-3xl p-2">
                <p className="text-2xl">ID</p>
                <input type="text" className="border bg-white text-2xl" name="email" placeholder="(例)rectangle"/>
                <p className="text-2xl">パスワード</p>
                <input type="password" className="border bg-white text-2xl" name="password" placeholder="(例)password"/>
                <div className="mt-2">
                <Link href='/' className="bg-gray-200 m-2 text-3xl font-semibold">戻る</Link>
                <button type='submit' formAction={Login} className="bg-gray-200 m-2 text-3xl font-semibold">ログイン</button>
                </div>
            </form>
        </div>
    )
}