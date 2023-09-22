import { Song } from '@/types/Song'
import { useState } from 'react'
import { Howl } from 'howler'

export default function useArray(arr: Song[], arr2: Howl[]) {
    const [queue, setQueue] = useState(arr)
    const [howlers, setHowlers] = useState(arr2)

    function queuePush(element: Song) {
        setQueue(a => [...a, element])
    }

    function queueRemove(index: number) {
        setQueue(a => [...a.slice(0, index), ...a.slice(index + 1, a.length)])
    }

    function queueClear() {
        setQueue([])
    }

    function howlersPush(element: Howl) {
        setHowlers(a2 => [...a2, element])
    }

    function howlersRemove(index: number) {
        setHowlers(a2 => [...a2.slice(0, index), ...a2.slice(index + 1, a2.length)])
    }

    function howlersClear() {
        setHowlers([])
    }
    
    return { queue, queueSet: setQueue, queuePush, queueRemove, queueClear, howlers, howlersSet: setHowlers,  howlersPush, howlersRemove, howlersClear}
}