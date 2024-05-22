'use client'
import { ReactNode, createContext, useContext, useState } from 'react'

interface CartItem {
  productId: number
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (productId: number) => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(productId: number) {
    setCartItems((state) => {
      // verifica se o produto já está no carrinho
      const productInCart = state.some((item) => item.productId === productId)

      // se o produto já estiver, encontra o produto com o mesmo Id e acrescenta 1 na quantidade
      if (productInCart) {
        return state.map((item) => {
          if (item.productId === productId) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            // se o produto for outro, apenas retorna
            return item
          }
        })
      } else {
        // caso não tenha o produto no carrinho, returna todos os produtos que já estão
        // junto do novo produto com a quantidade em 1
        return [...state, { productId, quantity: 1 }]
      }
    })
  }
  return (
    <CartContext.Provider value={{ items: cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
