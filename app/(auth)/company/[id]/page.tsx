'use client'
import { Company } from '@/app/types/company';
import { supabaseClient } from '@/supabase/client'
import { User as SupabaseUser } from '@supabase/supabase-js';
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";

export default function CompanyDetailPage() {
    // export default function LoginPage(){
    // const params = useParams<{ tag: string; item: string }>()
    // console.log(params);
    const [user, setUser] = useState<SupabaseUser | null>();
    const { id } = useParams();
    const [company, setCompany] = useState<Company>();

    useEffect(() => {
        (async () => {
            const { data: userData } = await supabaseClient.auth.getUser();
            const user = userData?.user;
            setUser(user);
        })();
    },[]);

    useEffect(() => {
        (async () => {
            const { data, error} = await supabaseClient
                .from('company')
                .select()
                .eq('id', id)
                .single();

                if (error) {
                    console.error("Error fetching company", error);
                } else if (data) {
                    setCompany(data);
                    console.log("Fetched company:", data);
                }
        })();
    },[id]);

    const addBookmark = async () => {
        const { data, error } = await supabaseClient
        .from('bookmark')
        .upsert({
            user_id: user?.id,
            company_id:company?.id });

        if (error) {
            console.error("Error bookmarking company", error);
        } else {
            console.log("Company bookmared", data);
            alert('この会社をブックマークしました！')
        }
    }

    return(
        <div className="flex flex-col items-center gap-5">
            <h1>会社概要</h1>
                <div className="sm:flex">
                    <h1 className="text-3xl bg-lime-300 sm:mx-2 px-2">{company?.name}</h1>
                    <button onClick={() => addBookmark()} className="bg-yellow-400 border">ブックマーク</button>
                </div>
                <h1 className="px-50 py-25 bg-gray-200">本来画像が入ります</h1>
                <div className="flex gap-9">
                    <div>
                        <ul className="bg-orange-500 p-3">
                            <li>{company?.explanation}</li>
                            <li>郵便番号:{company?.post_code}</li>
                            <li>{company?.town_address}</li>
                            <li>初任給:{company?.srart_salaly} 時給:{company?.normal_salaly}</li>
                            <li>{company?.access}</li>
                        </ul>
                    </div>
                    <div className="bg-yellow-400 p-3 w-75">
                        <p className="m-1">{company?.reviewer}</p>
                        <p className="bg-white p-2">{company?.review}<br /></p>
                    </div>
                </div>
        </div>
    )
}