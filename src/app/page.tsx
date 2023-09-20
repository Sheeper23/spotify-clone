import Header from "@/components/Header";
import HomeSongEntry from "@/components/HomeSongEntry";
import Sidebar from "@/components/Sidebar";
import UploadButton from "@/components/UploadButton";
import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Home() {
  const supabaseClient = createServerComponentClient<Database>({ cookies })
  const {
    data: { user }
  } = await supabaseClient.auth.getUser()

  const { data } = await supabaseClient
  .from("songs")
  .select("*")
  .order("title", { ascending: true })
  .limit(30)

  return (
    <main className="flex h-full p-2 gap-2">
      <Sidebar user={user} />
      <div className="flex flex-col grow bg-gray-950 rounded-lg overflow-hidden">
        <Header user={user} />
        <div className="flex grow bg-neutral-900 overflow-y-auto">
            <div className="flex flex-col w-full gap-4 m-6 @container overflow-y-auto">
                <p className="font-bold text-2xl">Newest Releases</p>
                <div className="select-none grid grid-cols-2 @2xl:grid-cols-3 @3xl:grid-cols-4 @4xl:grid-cols-5 @5xl:grid-cols-6 @6xl:grid-cols-7 @7xl:grid-cols-8 gap-4">
                  {
                    data && data.map((song) => {
                      return <HomeSongEntry key={song.id} song={song} />
                    })
                  }
                </div>
                <UploadButton />
            </div>
        </div>
      </div>
    </main>
  )
}
