"use client"

import useLoadAudioData from "@/hooks/useLoadAudioData"
import { ArrayFunctionsType, QueueContext } from "@/providers/QueueProvider"
import { Song } from "@/types/Song"
import { Howl, Howler } from 'howler'
import { useContext, useEffect, useState } from "react"

export default function MusicPlayer() {
    
    const [firstLoad, setFirstLoad] = useState(true)
    const queue = useContext(QueueContext) as ArrayFunctionsType
    
    useEffect(() => {
        if (firstLoad) {
            setFirstLoad(false)
            return
        }
        if (!queue.howlers[0].playing()) queue.howlers[0].play()
    }, [firstLoad, queue.howlers])

    return (
        <div className="flex h-24 items-center justify-center bg-neutral-600 px-4 py-2">
            <div className="flex justify-between items-center">
                {queue.queue.map((song) => {
                    return <div key={song.id}>{song.title}</div>
                })}
            </div>
        </div>
    )
}