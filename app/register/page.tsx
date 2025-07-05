import Link from "next/link";

export default function LoginPage(){
    return(
        <div className="h-[100vh] flex flex-col items-center">
            <h1 className="text5xl mt-10">新規登録画面</h1>
            <p>ID</p>
            <input type="text" className="border" placeholder="(例)rectangle"/>
            <p>パスワード</p>
            <input type="password" className="border" placeholder="(例)password"/>
            <p>本名</p>
            <input type="text" className="border" placeholder="(例)都道府　県"/>
            <p>出身地</p>
            <select name="aiueo" className="border">
                <option>北海道</option>
                <option>青森県</option>
                <option>岩手県</option>
                <option>宮城県</option>
                <option>山形県</option>
                <option>秋田県</option>
                <option>福島県</option>
            </select>
            <Link href='/'>戻る</Link>
            <Link href='home'>新規作成</Link>
        </div>
    )
}