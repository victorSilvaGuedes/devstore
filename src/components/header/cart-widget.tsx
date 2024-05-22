'use client'
import { ShoppingBag } from 'lucide-react'
import { TextAnimatedDecoration } from '../textAnimatedDecoration'
import { useCart } from '@/context/cart-context'

export function CartWidget() {
  const { items } = useCart()

  return (
    <div className="flex items-center gap-2">
      <ShoppingBag size={16} className="text-violet-500" />
      <TextAnimatedDecoration>Cart ({items.length})</TextAnimatedDecoration>
    </div>
  )
}
