import Link from "next/link";
import { Signup } from "./action";

export default function LoginPage(){
    return(
        <div className="flex flex-col items-center bg-gray-100">
            <h1 className="text-3xl my-1 font-black">新規登録画面</h1>
            <form>
                <div className="flex flex-col items-center bg-yellow-400 text-3xl md:w-[30vw]">
                    <p className="text-2xl md:text-2xl">Eメール</p>
                    <input type="email" className="border bg-white text-2xl md:text-2xl" name="email" placeholder="(例)rectangle@1234"/>
                    <p className="text-2xl md:text-2xl md:mt-10">パスワード(6文字以上、半角英数字表記)</p>
                    <input type="password" className="border bg-white text-2xl md:text-2xl md:mb-10" name="password" placeholder="(例)password"/>
                    <p className="text-2xl">名字</p>
                    <input type="text" className="border bg-white text-2xl" placeholder="(例)都道府"/>
                    <p className="text-2xl">名前</p>
                    <input type="text" className="border bg-white text-2xl" placeholder="(例)県"/>
                    {/* <p className="text-2xl md:text-3xl md:mt-10">出身地</p>
                    <select name="todohuken" className="border bg-white text-2xl md:text-3xl">
                        <option>北海道</option>
                        <option>青森県</option><option>岩手県</option><option>宮城県</option><option>秋田県</option><option>山形県</option><option>福島県</option>
                        <option>茨城県</option><option>栃木県</option><option>群馬県</option><option>埼玉県</option><option>千葉県</option><option>東京都</option><option>神奈川県</option>
                        <option>愛知県</option><option>三重県</option><option>滋賀県</option><option>京都府</option><option>大阪府</option><option>兵庫県</option><option>和歌山県</option>
                        <option>新潟県</option><option>富山県</option><option>石川県</option><option>福井県</option><option>山梨県</option><option>長野県</option><option>岐阜県</option><option>静岡県</option>
                        <option>福岡県</option><option>佐賀県</option><option>長崎県</option><option>熊本県</option><option>大分県</option><option>宮崎県</option><option>鹿児島県</option><option>沖縄県</option>
                        <option>鳥取県</option><option>島根県</option><option>岡山県</option><option>広島県</option><option>山口県</option><option>徳島県</option><option>香川県</option><option>愛媛県</option><option>高知県</option>
                    <div className="mt-3 md:mt-5">
                    </select> */}
                    <div className="flex">
                        <Link href='/' className="bg-gray-200 p-1 mx-5 text-3xl font-semibold md:text-3xl">戻る</Link>
                        <button className="bg-gray-200 p-1 mx-5 text-3xl font-semibold md:text-3xl" type='submit' formAction={Signup}>新規作成</button>
                    </div>
                </div>
            </form>
        </div>
    )
}