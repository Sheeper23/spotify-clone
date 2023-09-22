"use client"

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { GoHomeFill } from 'react-icons/go'
import { FiSearch } from 'react-icons/fi'
import Link from 'next/link'
import HeaderUser from './HeaderUser'
import { User } from '@supabase/auth-helpers-nextjs'

type HeaderProps = {
    search?: boolean
    user: User | null
}

export default function Header({ search = false, user }: HeaderProps) {

    return (
        <header className="flex w-full basis-1/12 items-center">
            <div className="flex w-full items-center justify-between px-6 select-none">
                <div className="flex gap-3 md:gap-6 text-gray-300 items-center">
                    <BsChevronLeft className="hidden md:block hover:text-white cursor-pointer transition-all duration-300" size={20} />
                    <BsChevronRight className="hidden md:block hover:text-white cursor-pointer transition-all duration-300" size={20} />
                    <Link
                    href="/"
                    className="md:hidden flex w-10 aspect-square items-center justify-center rounded-full bg-white text-black">
                        <GoHomeFill size={20} />
                    </Link>
                    <Link
                    href="/search"
                    className="md:hidden flex w-10 aspect-square items-center justify-center rounded-full bg-white text-black">
                        <FiSearch size={15} />
                    </Link>
                </div>
                {
                    search && (
                    <div className="flex box-border items-center overflow-hidden grow mx-3 gap-3 bg-neutral-900 h-12 px-3 rounded-full group focus-within:border-2 focus-within:border-white focus-within:hover:border-2 focus-within:hover:border-white hover:border hover:border-neutral-600">
                        <FiSearch className="group-hover:text-white group-focus-within:text-white text-gray-400" size={20} />
                        <input
                        type="text"
                        placeholder="What do you want to listen to?"
                        spellCheck={false}
                        maxLength={800}
                        autoCapitalize="off"
                        autoCorrect="off"
                        className="grow outline-none bg-transparent text-sm"
                        />
                    </div>
                    )
                }
                <HeaderUser user={user} />
            </div>
        </header>
    )
}
