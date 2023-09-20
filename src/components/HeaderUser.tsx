import { User } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";

export default async function HeaderUser({ user }: { user: User | null }) {
    // const logout = async (formData: FormData) => {
    //     "use server"

    //     const supabase = createServerActionClient<Database>({ cookies })
    //     await supabase.auth.signOut()
    //     // const { error } = await supabaseClient.auth.signOut()
    //     // if (error) toast.error(error.message)
    //     // else toast.success("Logged out!")
    //     toast.success(`Logged out!`)
    // }

    return (
        <div className="flex gap-4 select-none">
            {user ?
                <form action="/auth/signout" method="post">
                    <button
                    type="submit"
                    className="flex w-28 h-12 rounded-full bg-white text-black hover:scale-105 active:scale-100 active:bg-gray-200 font-bold items-center justify-center cursor-pointer">
                        <p>Log out</p>
                    </button>
                </form>
            : (
                <>
                    <Link
                    href="/login"
                    className="flex w-28 h-12 rounded-full text-gray-400 hover:text-white hover:scale-105 active:scale-100 active:text-gray-500 font-bold items-center justify-center cursor-pointer">
                        <p>Sign up</p>
                    </Link>
                    <Link
                    href="/login"
                    className="flex w-28 h-12 rounded-full bg-white text-black hover:scale-105 active:scale-100 active:bg-gray-200 font-bold items-center justify-center cursor-pointer">
                        <p>Log in</p>
                    </Link>
                </>
            )}
        </div>
    )
}