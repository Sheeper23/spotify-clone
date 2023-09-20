"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarLinkProps = {
    children: React.ReactNode
    path: string
}

export default function SidebarLink({ children, path }: SidebarLinkProps) {
    const pathname = usePathname()
    
    return (
        <Link
        href={path}
        className={`${pathname === path ? "text-white" : "text-gray-400 hover:text-white"} flex items-center gap-4 transition-all duration-300`}>
            {children}
        </Link>
    )
}