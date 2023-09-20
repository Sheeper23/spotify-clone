"use client"

import { ThemeSupa } from "@supabase/auth-ui-shared"
import { Auth } from "@supabase/auth-ui-react";
import { User, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthBox({ user }: {user: User | null}) {
    const supabaseClient = createClientComponentClient<Database>()
    const router = useRouter()

    useEffect(() => {
        if (user) {
            router.back()
        }
    }, [user, router])

    return (
        <Auth
        supabaseClient={supabaseClient}
        appearance={{
            theme: ThemeSupa,
            variables: {
                default: {
                    radii: {
                        borderRadiusButton: "9999px"
                    },
                    colors: {
                        brand: 'rgb(34 197 94)',
                        brandAccent: 'rgb(34 197 94)'
                    }
                }
            }
        }}
        theme="dark"
        providers={[]}
        />
    )
}