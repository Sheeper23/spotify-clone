import AuthBox from "@/components/AuthBox";
import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";

export default async function Login() {
    const supabaseClient = createServerComponentClient<Database>({ cookies })
    const {
        data: { user }
    } = await supabaseClient.auth.getUser()

    return (
        <main className="flex w-full px-10 py-12 md:justify-center">
            <div className="flex flex-col grow gap-10 w-full max-w-[500px]">
                <Link
                href="/"
                className="flex items-center gap-1">
                    <FaSpotify size={25} />
                    <p>Spotify</p>
                </Link>
                <p className="font-extrabold text-4xl md:self-center">Log in to Spotify</p>
                <AuthBox user={user} />
            </div>
        </main>
    )
}