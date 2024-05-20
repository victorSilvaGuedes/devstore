import { api } from '@/data/api'
import { Product as ProductType } from '@/data/types/product'
import { Metadata } from 'next'
import Image from 'next/image'

async function getProduct(slug: string): Promise<ProductType> {
  // recupera os produtos featured
  const response = await api(`/products/${slug}`, {
    // a cada uma hora a api será executada, mantendo os dados já guardados em cache
    next: { revalidate: 60 * 60 },
  })

  const product = await response.json()

  return product
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const product = await getProduct(params.slug)
  return { title: product.title }
}

export default async function Product({
  params,
}: {
  params: { slug: string }
}) {
  const product = await getProduct(params.slug)

  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src={product.image}
          alt={`${product.title} - ${product.description}`}
          width={860}
          height={860}
          quality={100}
        />
      </div>
      <div className="flex flex-col px-12 justify-center">
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>

        <p className="text-zinc-400 leading-relaxed mt-2">
          {product.description}
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="bg-violet-500 rounded-full font-semibold px-4 py-2">
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
          <span className="text-sm text-zinc-400">
            Em 10x sem juros de {''}
            {(product.price / 10).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <span className="font-semibold">Tamanhos</span>

          <div className="flex gap-2">
            <button
              type="button"
              className="h-9 w-14 rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold hover:scale-105 transition-transform duration-150"
            >
              P
            </button>
            <button
              type="button"
              className="h-9 w-14 rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold hover:scale-105 transition-transform duration-150"
            >
              M
            </button>
            <button
              type="button"
              className="h-9 w-14 rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold hover:scale-105 transition-transform duration-150"
            >
              G
            </button>
            <button
              type="button"
              className="h-9 w-14 rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold hover:scale-105 transition-transform duration-150"
            >
              GG
            </button>
          </div>

          <button
            type="button"
            className="mt-4 rounded-full h-12 bg-emerald-800 font-semibold hover:scale-105 transition-transform duration-150"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  )
}
