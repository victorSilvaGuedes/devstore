import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
  fallback: ['sans-serif'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: 'devstore | %s',
    default: 'devstore',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={inter.variable} lang="pt">
      <body className="bg-zinc-950 text-zinc-50 antialiased font-inter">
        {children}
      </body>
    </html>
  )
}
