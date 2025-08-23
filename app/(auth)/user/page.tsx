import { getUserProfile } from "./action";
import { handleUserInfoSumit } from "./action"


export default async function LoginPage(){
    const userProfile = await getUserProfile();
    return(
        <div className="flex flex-col items-center">
            <h1>ユーザー情報</h1>
            <div className="bg-lime-200">
                <p>ユーザー情報の確認・変更</p>
                <form action={handleUserInfoSumit} method="post">
                    <div>
                        <label htmlFor="first_name" className="bock text-sm font-medium text-gray-700">名前</label>
                        <input type="text" name='first_name' id="first_name" defaultValue={userProfile?.first_name || ''} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 foucus:border-indigo-500 sm:text-sm"/>
                    </div>
                    <div>
                        <label htmlFor="second_name" className="bock text-sm font-medium text-gray-700">名字</label>
                        <input type="text" name='second_name' id="second_name" defaultValue={userProfile?.second_name || ''} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 foucus:border-indigo-500 sm:text-sm"/>
                    </div>
                    <div>
                        <label htmlFor="telephone" className="bock text-sm font-medium text-gray-700">電話番号</label>
                        <input type="text" name='telephone' id="telephone" defaultValue={userProfile?.telephone || ''} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 foucus:border-indigo-500 sm:text-sm"/>
                    </div>
                    <button type="submit" className="bg-gray-200 mx-2">適用</button>
                </form>
            </div>
            <form action="/api/signout" method="post">
                <button type="submit" className="bg-gray-200 mx-2">ログアウト</button>
            </form>
        </div>
    )
}