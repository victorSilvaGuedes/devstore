'use client'
import { useCart } from '@/context/cart-context'
import { CircleCheckBig } from 'lucide-react'
import { toast } from 'sonner'

interface AddToCartButtonProps {
  productId: number
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  function handleAddProductToCart() {
    addToCart(productId)

    toast('Produto adicionado ao carrinho!', {
      className:
        'bg-zinc-800 text-zinc-100 font-inter border-none shadow antialiased',
      duration: 3000,
      icon: <CircleCheckBig size={20} />,
    })
  }
  return (
    <button
      type="button"
      className="mt-4 rounded-full h-12 bg-emerald-800 font-semibold hover:scale-105 transition-transform duration-150"
      onClick={handleAddProductToCart}
    >
      Adicionar ao carrinho
    </button>
  )
}
