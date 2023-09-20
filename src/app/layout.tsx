import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import ToasterProvider from '@/providers/ToasterProvider'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify',
  description: 'A spotify clone created with React',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} m-0 h-[100dvh] bg-black text-white`}>
        <ToasterProvider />
        {children}
      </body>
    </html>
  )
}
