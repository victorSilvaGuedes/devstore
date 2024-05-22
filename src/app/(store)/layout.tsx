import { Header } from '@/components/header'
import { CartProvider } from '@/context/cart-context'

export default function LayoutStore({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CartProvider>
      <div className="text-zinc-100 mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[min-content_max-content] gap-5 p-8">
        <Header />
        {children}
      </div>
    </CartProvider>
  )
}
