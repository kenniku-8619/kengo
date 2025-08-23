'use server'
import { Company } from "@/app/types/company";
import { createClient } from "@/supabase/server";

export const deleteBookmark = async (company: Company) => {
    const supabase = await createClient()
    const { data: authdata } = await supabase.auth.getUser()
    const user = authdata.user
    const { data, error } = await supabase
    .from('bookmark')
    .delete()
    .eq('user_id' , user?.id)
    .eq('company_id' , company?.id);
        
    if (error) {
        console.error("Error bookmarking company", error);
    } else {
        console.log("Company bookmared", data);
        alert('この会社のブックマークを削除しました！')
    }
}