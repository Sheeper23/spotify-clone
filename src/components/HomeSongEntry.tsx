"use client"

import useLoadImageData from "@/app/hooks/useLoadImageData"
import Image from "next/image"
import SongPlayButton from "./SongPlayButton"
import { Howl, Howler } from 'howler'
import useLoadAudioData from "@/app/hooks/useLoadAudioData"

type HomeSongEntryProps = {
    song: {author: string | null
        created_at: string
        id: number
        image_path: string | null
        song_path: string | null
        title: string | null
        user_id: string | null}
}

export default function HomeSongEntry({
    song
}: HomeSongEntryProps) {const imagePath = useLoadImageData(song.image_path)
    const songPath = useLoadAudioData(song.song_path)

    const sound = new Howl({
        src: [songPath || ""], // NEED FALLBACK SOUND
    })

    return (
        <div onClick={() => sound.playing() ? sound.pause() : sound.play()} className="flex flex-col aspect-[3/4] rounded-md bg-neutral-800 p-3 gap-4 overflow-hidden group hover:bg-neutral-700 transition duration-300 cursor-pointer">
            <div className="relative aspect-square rounded-md overflow-hidden">
                <Image
                className="object-cover"
                src={imagePath || ''} // PLEASE IMPLEMENT A FALLBACK IMAGE <3
                fill
                alt="image-placeholder"
                />
                <SongPlayButton />
            </div>
            <div className="flex flex-col gap-1">
                <p className="font-semibold truncate">{song.title}</p>
                <p className="text-neutral-400 truncate">{song.author}</p>
            </div>
            
        </div>
    )
}