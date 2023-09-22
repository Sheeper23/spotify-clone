"use client"

import useArray from "@/hooks/useArray";
import { Song } from "@/types/Song";
import { Dispatch, SetStateAction, createContext } from "react";
import { Howl } from 'howler'
import useLoadAudioData from "@/hooks/useLoadAudioData";

export type ArrayFunctionsType = {
    queue: Song[]
    queueSet: Dispatch<SetStateAction<Song[]>>
    queuePush: (element: Song) => void
    queueRemove: (index: number) => void
    queueClear: () => void
    howlers: Howl[]
    howlersSet: Dispatch<SetStateAction<Howl[]>>
    howlersPush: (element: Howl) => void
    howlersRemove: (index: number) => void
    howlersClear: () => void
}

export const QueueContext = createContext<ArrayFunctionsType | undefined>(undefined)

export default function QueueProvider({ children }: { children: React.ReactNode}) {
    
    
    return (
        <QueueContext.Provider value={{...useArray([], [])}}>
            {children}
        </QueueContext.Provider>
    )

}