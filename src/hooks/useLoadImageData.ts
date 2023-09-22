import { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function useLoadImageData(imagePath: string | null) {
    if (!imagePath) {
        return null
    }
    
    const supabaseClient = createClientComponentClient<Database>()
    
    const { data: imageData } = supabaseClient
    .storage
    .from('images')
    .getPublicUrl(imagePath)

    return imageData.publicUrl
}