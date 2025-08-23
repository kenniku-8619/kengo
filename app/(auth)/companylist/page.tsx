"use client"

import { supabaseClient } from "@/supabase/client";
import { Company } from "@/app/types/company";
import Link from "next/link";

import { useEffect, useState } from "react";export default function LoginPage(){
    const [companies,setCompanies] = useState<Company[]>([]);
    useEffect(() => {
        (async () => {
            const { data, error } = await supabaseClient.from('company').select('*');
            if (error) {
                console.error('Error fetching companies:' , error);
            } else {
                setCompanies(data || []);
                console.log("Fetched companies",data);
            }
        })();
    }, []);

    return(
        <div className="flex flex-col items-center">
            <h1 className="m-3 text-3xl">会社一覧</h1>
            <div className="bg-lime-300  flex justify-center py-10 flex-wrap w-[300] md:w-[500] gap-5">
                {companies.map((company, index) => {
                    return (
                        <div key={index} className="bg-orange-500 p-1"><p className="m-1">{company.name}</p><Link href={`/company/${company.id}`}className="bg-gray-200 p-1 mb-2" key={index}>詳細を確認する</Link></div>
                    )
                })}
                <div className="bg-orange-500 p-1"><p className="m-1">会社E</p><Link href="company/E"className="bg-gray-200 p-1 mb-2">詳細を確認する</Link></div>
                <div className="bg-orange-500 p-1"><p className="m-1">会社F</p><Link href="company/F"className="bg-gray-200 p-1 mb-2">詳細を確認する</Link></div>
                <div className="bg-orange-500 p-1"><p className="m-1">会社G</p><Link href="company/G"className="bg-gray-200 p-1 mb-2">詳細を確認する</Link></div>
                <div className="bg-orange-500 p-1"><p className="m-1">会社H</p><Link href="company/H"className="bg-gray-200 p-1 mb-2">詳細を確認する</Link></div>
                <div className="bg-orange-500 p-1"><p className="m-1">会社I</p><Link href="company/I"className="bg-gray-200 p-1 mb-2">詳細を確認する</Link></div>
            </div>
        </div>
    )
}