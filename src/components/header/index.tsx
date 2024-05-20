'use client'
import Link from 'next/link'
import { InputFocusBlur } from '../input'
import { Search, ShoppingBag, UserRound } from 'lucide-react'
import { TextAnimatedDecoration } from '../textAnimatedDecoration'

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

        <form className="w-[320px]">
          <InputFocusBlur placeholder="Buscar produtos...">
            <Search />
          </InputFocusBlur>
        </form>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ShoppingBag size={16} className="text-violet-500" />
          <TextAnimatedDecoration>Cart (0)</TextAnimatedDecoration>
        </div>

        <div className="w-0.5 h-4 bg-violet-500" />

        <Link href="/" className="flex items-center gap-2">
          <TextAnimatedDecoration>Account</TextAnimatedDecoration>
          <UserRound size={16} className="text-violet-500" />
        </Link>
      </div>
    </header>
  )
}
