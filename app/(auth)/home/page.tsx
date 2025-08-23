import Link from "next/link";
import { Tokuikensaku } from "./tokuikensaku";

export default function LoginPage(){
    return(
        <div className="flex flex-col items-center">
            <h1 className="m-5 text-2xl">ホーム画面</h1>
            <Link href='bookmark' className="bg-orange-500 p-2 text-2xl">ブックマークした会社一覧</Link>
            <div className="bg-yellow-400 m-5 p-2">
                <h1>あなたの興味のありそうな会社</h1>
                <div className="flex justify-evenly">
                    <Link href='company/A' className="bg-gray-200 m-2 p-1">会社A</Link>
                    <Link href='company/B' className="bg-gray-200 m-2 p-1">会社B</Link>
                    <Link href='company/C' className="bg-gray-200 m-2 p-1">会社C</Link>
                </div>
            </div>
            <Tokuikensaku />
        </div>
    )
}