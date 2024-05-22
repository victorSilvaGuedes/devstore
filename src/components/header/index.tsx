import Link from 'next/link'

import { UserRound } from 'lucide-react'
import { TextAnimatedDecoration } from '../textAnimatedDecoration'
import { CartWidget } from './cart-widget'
import { Toaster } from 'sonner'
import { SearchForm } from '../searchForm'

export function Header() {
  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center gap-5">
        <Link
          href="/"
          className="inline-flex animate-text-gradient bg-gradient-to-r from-violet-500 via-zinc-300 to-violet-500 bg-[200%_auto] text-2xl text-center text-transparent font-extrabold bg-clip-text"
        >
          devstore
        </Link>

        <SearchForm />
      </div>
      <div className="flex items-center gap-4">
        <CartWidget />

        <div className="w-0.5 h-4 bg-violet-500" />

        <Link href="/" className="flex items-center gap-2">
          <TextAnimatedDecoration>Account</TextAnimatedDecoration>
          <UserRound size={16} className="text-violet-500" />
        </Link>

        <Toaster position="bottom-left" theme="dark" />
      </div>
    </header>
  )
}
