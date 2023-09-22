"use client"

import { User } from "@supabase/auth-helpers-nextjs"
import Header from "./Header"
import HomeSongEntry from "./HomeSongEntry"
import MusicPlayer from "./MusicPlayer"
import Sidebar from "./Sidebar"
import { Song } from "@/types/Song"
import toast from "react-hot-toast"
import { useContext } from "react"
import { ArrayFunctionsType, QueueContext } from "@/providers/QueueProvider"
import { Howl } from 'howler'
import useLoadAudioData from "@/hooks/useLoadAudioData"

type HomePageContentProps = {
    user: User | null
    data: Song[] | null
}

export default function HomePageContent({ user, data }: HomePageContentProps) {
    const queue = useContext(QueueContext) as ArrayFunctionsType

    const onClick = (song: Song, songPath: string) => {
        if (!queue.queue.includes(song)) {
            queue.howlersPush(new Howl({
                src: [songPath],
                onend: () => {
                    queue.queueRemove(0)
                    queue.howlersRemove(0)
                }
            }))
            queue.queuePush(song)
            toast.success(`Added to queue: ${song.title}`)
        }
    }
    
    return (
        <>
            <div className={`${queue.queue.length > 0 ? "max-h-[calc(100vh-5.5rem)]" : ""} flex h-full p-2 gap-2`}>
                <Sidebar user={user} />
                <div className="flex flex-col grow bg-gray-950 rounded-lg overflow-hidden">
                <Header user={user} />
                <div className="flex grow bg-neutral-900 overflow-y-auto">
                    <div className="flex flex-col w-full gap-4 m-6 @container overflow-y-auto">
                        <p className="font-bold text-2xl">Newest Releases</p>
                        <div className="select-none grid grid-cols-2 @2xl:grid-cols-3 @3xl:grid-cols-4 @4xl:grid-cols-5 @5xl:grid-cols-6 @6xl:grid-cols-7 @7xl:grid-cols-8 gap-4">
                            {
                                data && data.map((song) => {
                                    return <HomeSongEntry key={song.id} song={song} onClick={onClick} />
                                })
                            }
                        </div>
                        {/* <UploadButton /> */}
                    </div>
                </div>
                </div>
            </div>
            {queue.queue.length > 0 && <MusicPlayer />}
        </>
    )
}