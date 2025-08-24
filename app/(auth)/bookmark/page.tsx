'use client';
import { Company } from "@/app/types/company";
import { supabaseClient } from "@/supabase/client";
import { useEffect, useState } from "react";
import { deleteBookmark } from "./action";
import Link from "next/link";

export default function LoginPage(){
    const [companies, setcompanies] = useState<Company[]>([]);

    useEffect (() => {
        (async() => {
            const { data: userData } = await supabaseClient.auth.getUser();
            const user = userData?.user;
            const {data} = await supabaseClient.from('bookmark').select(`company(*)`).eq('user_id', user?.id);
            const companyData = data?.map(bookmark => bookmark.company).flat();
            setcompanies(companyData || []);
        })();
    },[]);

    return(
        <div className="flex flex-col items-center">
            <h1 className="m-3 text-3xl">ブックマークした会社一覧</h1>
            <div className="bg-lime-300  flex justify-center my-5 py-5 flex-wrap w-100 gap-5">
                {/* <div className="bg-orange-500 p-1"><p className="m-1">会社A</p><Link href="company/A"className="bg-gray-200 p-1 mb-2">評細を確認する</Link></div> */}
                {companies.map((company) =>{
                    console.log(company)
                    return(
                        <Link href={company.name}>
                            <div key={company.id} className="border p-1 my-2 bg-orange-500 ">
                                <p>会社名:{company.name}</p>
                                <p>郵便番号:{company.post_code}</p>
                                <button onClick={() => deleteBookmark(company)} className="bg-gray-200 p-1 mb-2">ブックマークを削除</button>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}