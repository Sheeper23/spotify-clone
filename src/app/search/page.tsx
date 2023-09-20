import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Search() {
  const supabaseClient = createServerComponentClient<Database>({ cookies })
  const {
    data: { user }
  } = await supabaseClient.auth.getUser()
  
  return (
    <main className="flex h-full p-2 gap-2">
        <Sidebar user={user} />
        <div className="flex flex-col grow bg-gray-950 rounded-lg overflow-hidden">
            <Header search={true} user={user} />
            <div className="flex grow bg-neutral-900">
              
            </div>
        </div>
    </main>
  )
}
