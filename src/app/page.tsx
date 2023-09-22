import HomePageContent from "@/components/HomePageContent";
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
    <main className="flex flex-col w-full h-full">
      <HomePageContent user={user} data={data} />
    </main>
  )
}
