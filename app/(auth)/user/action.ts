'use server'

import { createClient } from "@/supabase/server"
import { revalidatePath } from "next/cache"
import {NextRequest} from "next/server"
import { redirect } from "next/navigation"

export async function Logout(req: NextRequest) {
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (user) {
        await supabase.auth.signOut()
    }

    revalidatePath('/', 'layout')
    redirect('/')
}