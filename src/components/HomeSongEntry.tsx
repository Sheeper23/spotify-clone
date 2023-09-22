"use client"

import useLoadImageData from "@/hooks/useLoadImageData"
import Image from "next/image"
import SongPlayButton from "./SongPlayButton"
import { Song } from "@/types/Song"
import useLoadAudioData from "@/hooks/useLoadAudioData"

type HomeSongEntryProps = {
    song: Song
    onClick: (song: Song, songPath: string) => void
}

export default function HomeSongEntry({
    song,
    onClick
}: HomeSongEntryProps) {
    const imagePath = useLoadImageData(song.image_path)
    const songPath = useLoadAudioData(song.song_path)

    const handleClick = () => {
        onClick(song, songPath || "") // PLEASE GIVE FALLBACK SOUND
    }

    return (
        <div onClick={handleClick} className="flex flex-col aspect-[5/7] rounded-md bg-neutral-800 p-3 gap-4 overflow-hidden group hover:bg-neutral-700 transition duration-300 cursor-pointer">
            <div className="relative">
                <Image
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto rounded-md"
                src={imagePath || ''} // PLEASE IMPLEMENT A FALLBACK IMAGE <3
                alt="image-placeholder"
                />
                <SongPlayButton />
            </div>
            <div className="flex flex-col grow justify-evenly">
                <p className="font-semibold truncate">{song.title}</p>
                <p className="text-neutral-400 truncate">{song.author}</p>
            </div>
            
        </div>
    )
}