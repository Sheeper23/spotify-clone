"use client"

import { User } from "@supabase/auth-helpers-nextjs"
import Header from "./Header"
import Sidebar from "./Sidebar"
import MusicPlayer from "./MusicPlayer"
import { useContext } from "react"
import { ArrayFunctionsType, QueueContext } from "@/providers/QueueProvider"

type SearchPageContentProps = {
    user: User | null
}

export default function SearchPageContent({
    user
}: SearchPageContentProps) {
    const queue = useContext(QueueContext) as ArrayFunctionsType

    return (
        <>
            <div className={`${queue.queue.length > 0 ? "max-h-[calc(100vh-5.5rem)]" : ""} flex h-full p-2 gap-2`}>
                <Sidebar user={user} />
                <div className="flex flex-col grow bg-gray-950 rounded-lg overflow-hidden">
                    <Header search={true} user={user} />
                    <div className="flex grow bg-neutral-900">
                        
                    </div>
                </div>
            </div>
            {queue.queue.length > 0 && <MusicPlayer />}
        </>
    )
}