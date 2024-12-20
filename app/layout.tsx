/** @format */

import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import UserInfo from '@/components/ui/userInfo'
import HeaderMenu from '@/components/ui/headerMenu'
import { Toaster } from '@/components/ui/sonner'

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
})
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en' suppressHydrationWarning className='h-full'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-full`}
            >
                <HeaderMenu>
                    <UserInfo></UserInfo>
                </HeaderMenu>

                {children}
                <Toaster closeButton />
            </body>
        </html>
    )
}
