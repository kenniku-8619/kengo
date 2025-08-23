import Link from "next/link";

export default function AuthLayout({children} : {children: React.ReactNode;}) {
    return (
        <div className="bg-gray-100">
            <header className="bg-yellow-400 flex justify-evenly p-2">
                <Link href='http://localhost:3000/home' >ホーム</Link>
                <div>
                    <input type="text" className="border bg-white mr-2" placeholder="検索"/>
                    <button><Link href='http://localhost:3000/home' className="bg-gray-200 p-1 border">検索</Link></button>
                </div>
                <Link href='http://localhost:3000/companylist'>会社一覧</Link>
                <Link href='http://localhost:3000/user'>ユーザー情報</Link>
            </header>
             {children}
            <footer className="bg-orange-500 flex flex-col items-center p-3">
                <p className="font-black text-2xl">© 2025 kengo!!</p>
            </footer>
        </div>
    )
}