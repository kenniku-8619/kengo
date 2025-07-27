import Link from "next/link";
import {Logout} from "./action";


export default function LoginPage(){
    return(
        <div className="h-[100vh] flex flex-col items-center">
            <h1>ユーザー情報</h1>
            <form action="/api/signout" method="post">
                <button type="submit" className="bg-gray-200">ログアウト</button>
            </form>
        </div>
    )
}