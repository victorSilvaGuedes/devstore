import { TextShake } from '@/components/textShake'
import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import Image from 'next/image'
import Link from 'next/link'

async function getFeaturedProducts(): Promise<Product[]> {
  // recupera os produtos featured
  const response = await api('/products/featured', {
    // a cada uma hora a api será executada, mantendo os dados buscados em cache
    next: { revalidate: 60 * 60 },
  })

  const products = await response.json()

  return products
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="relative group col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          priority
          src={highlightedProduct.image}
          width={860}
          height={860}
          quality={100}
          alt={`${highlightedProduct.title} - ${highlightedProduct.description}`}
          className="group-hover:scale-105 transition-transform duration-500 "
        />
        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <TextShake>{highlightedProduct.title}</TextShake>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold hover:scale-105 transition-transform duration-150">
            {highlightedProduct.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>
      {otherProducts.map((product) => {
        return (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="relative group col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
          >
            <Image
              src={product.image}
              width={430}
              height={430}
              quality={100}
              alt={(product.title, product.description)}
              className="group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-14 right-14 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <TextShake>{product.title}</TextShake>

              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold hover:scale-105 transition-transform duration-150">
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
