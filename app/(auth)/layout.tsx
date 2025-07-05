import Link from "next/link";

export default function AuthLayout({children} : {children: React.ReactNode;}) {
    return (
        <>
            <header className="bg-yellow-400">
                <Link href='home'>ホーム</Link>
                <input type="text" className="border bg-white" placeholder="検索"/>
                <button><Link href='home'>検索</Link></button>
                <Link href='company'>会社一覧</Link>
                <Link href='user'>ユーザー情報</Link>
            </header>
             {children}
            <footer className="bg-orange-500 flex flex-col items-center">
                <p>© 2025 kengo!!</p>
            </footer>
        </>
    )
}