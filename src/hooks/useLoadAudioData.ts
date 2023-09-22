import { Database } from "@/types/supabase"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export default function useLoadAudioData(songPath: string | null) {
    if (!songPath) {
        return null
    }

    const supabaseClient = createClientComponentClient<Database>()
    
    const { data: songData } = supabaseClient
    .storage
    .from('songs')
    .getPublicUrl(songPath)

    return songData.publicUrl
}