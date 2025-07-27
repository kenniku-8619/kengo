'use client'
import Link from "next/link";
import { useParams } from 'next/navigation'

export default function LoginPage(){
    const params = useParams<{ tag: string; item: string }>()
    console.log(params);
    return(
        <div className="h-[100vh] flex flex-col items-center gap-5">
            <h1>会社概要</h1>
                <h1 className="text-3xl bg-lime-300 px-2">{params.id}</h1>
                <h1 className="px-50 py-25 bg-gray-200">本来画像が入ります</h1>
                <div className="flex gap-9">
                    <div>
                        <ul className="bg-orange-500 p-3">
                            <li>健設会社</li>
                            <li>広鳥県北広鳥市</li>
                            <li>初任給:-180000 時給:-1300</li>
                            <li>広島駅から徒歩170分</li>
                        </ul>
                    </div>
                    <div className="bg-yellow-400 p-3">
                        <p className="m-1">都道府　県さん(〇〇)</p>
                        <p className="bg-white p-2">～～～～～～～～～～～～～～～<br />～～～～～～～～～～～～～～～<br />～～～～～～～～～～～～～～～<br />～～～～～～～～～～～～～～～<br /></p>
                    </div>
                </div>
        </div>
    )
}