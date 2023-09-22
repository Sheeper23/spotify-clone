import SearchPageContent from "@/components/SearchPageContent";
import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Search() {
  const supabaseClient = createServerComponentClient<Database>({ cookies })
  const {
    data: { user }
  } = await supabaseClient.auth.getUser()
  
  return (
    <main className="flex flex-col w-full h-full">
      <SearchPageContent user={user} />
    </main>
  )
}
