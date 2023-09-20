import { Database } from "@/types/supabase"
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

export default function UploadButton() {
    const handleAction = async (formData: FormData) => {
        "use server"

        // const supabaseClient = createServerActionClient<Database>({ cookies })
        // const {
        //     data: { user }
        // } = await supabaseClient.auth.getUser()

        // const kill = (await supabaseClient.storage.from('songs').list()).data?.forEach(async (songData) => await supabaseClient
        // .from('songs')
        // .insert({
        //   user_id: user?.id,
        //   title: "MAKE ME",
        //   author: "MAKE ME",
        //   image_path: `${songData.name.slice(0,songData.name.length-9)}Cover.jpg`,
        //   song_path: songData.name
        // }))
        
        // revalidatePath("/")
    }
    
    return (
        <div className="flex w-full rounded-full text-black bg-white h-12 items-center justify-center font-bold">
            <form action={handleAction}>
                <button type="submit">
                    Confirm
                </button>
            </form>
        </div>
    )
}