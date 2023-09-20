import { FaPlay } from 'react-icons/fa'

export default function SongPlayButton() {
    return (
        <div className="absolute bottom-0 right-0 text-black m-1 translate opacity-0 translate-y-1/4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <div className="flex items-center justify-center w-12 aspect-square bg-green-500 rounded-full hover:scale-105">
                <FaPlay />
            </div>
        </div>
    )
}