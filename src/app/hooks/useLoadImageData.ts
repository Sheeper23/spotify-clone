import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default function useLoadImageData(imagePath: string | null) {
    if (!imagePath) {
        return null
    }
    
    const supabaseClient = createServerComponentClient<Database>({ cookies })
    
    const { data: imageData } = supabaseClient
    .storage
    .from('images')
    .getPublicUrl(imagePath)

    return imageData.publicUrl
}