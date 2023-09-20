"use client"

import { GoHomeFill } from 'react-icons/go'
import { FiSearch } from 'react-icons/fi'
import { FaSpotify } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import { MdOutlineQueueMusic } from 'react-icons/md'
import { BiPlus } from 'react-icons/bi'
import Link from 'next/link'
import { User } from '@supabase/auth-helpers-nextjs'

export default function Sidebar({ user }: { user: User | null}) {
    const pathnmame = usePathname()
  
    return (
    <div className="hidden md:flex flex-col w-80 h-full gap-2 select-none">
        <div className="flex flex-col bg-neutral-900 rounded-lg p-5 gap-5">
            <Link
            href="/"
            className="flex items-center gap-1">
                <FaSpotify size={25} />
                <p>Spotify</p>
            </Link>
            <Link
            href="/"
            className={`${pathnmame === "/" ? "text-white" : "text-gray-400 hover:text-white"} flex items-center gap-4 transition-all duration-300`}>
                <GoHomeFill size={30} />
                <p>Home</p>
            </Link>
            <Link
            href="/search"
            className={`${pathnmame === "/search" ? "text-white" : "text-gray-400 hover:text-white"} flex items-center gap-5 transition-all duration-300`}>
                <FiSearch size={25} />
                <p>Search</p>
            </Link>
        </div>
        <div className="bg-neutral-900 rounded-lg grow p-5">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-1 text-gray-400 hover:text-white transition-all duration-300 cursor-pointer">
                    <MdOutlineQueueMusic size={25} />
                    <p>Your Library</p>
                </div>
                <div className="text-gray-400 hover:text-white transition-all duration-300 cursor-pointer">
                    <BiPlus size={25} />
                </div>
                
            </div>
            
        </div>
        
    </div>
  )
}
