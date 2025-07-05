import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[100vh] flex flex-col items-center bg-gray-100">
      <h1 className="text-5xl font-black mt-10">けんGO!!</h1>
      <h2 className="text-3xl mt-25 mb-25 font-semibold">地方に特化した<span className="block sm:hidden"/>就職アプリ</h2>
      <Link href="register" className="bg-yellow-400 text-2xl px-5 py-2">新規登録</Link>
      <Link href="login" className="bg-orange-500 text-2xl px-5 py-2">ログイン</Link>
    </div>
  );
}
