import { api } from '@/data/api'
import { Product as ProductType } from '@/data/types/product'
import { env } from '@/env'
import { ImageResponse } from 'next/og'
import colors from 'tailwindcss/colors'

export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

async function getProduct(slug: string): Promise<ProductType> {
  // recupera o produto especifico com seu slug
  const response = await api(`/products/${slug}`, {
    // a cada uma hora a api será executada, mantendo os dados já guardados em cache
    next: { revalidate: 60 * 60 },
  })

  const product = await response.json()

  return product
}

export default async function OgImage({
  params,
}: {
  params: { slug: string }
}) {
  const product = await getProduct(params.slug)

  const productImageURL = new URL(product.image, env.APP_URL).toString()

  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[950],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img
          src={productImageURL}
          alt={`Produto: ${product.title}`}
          style={{ width: '100%' }}
        />
      </div>
    ),
    {
      ...size,
    },
  )
}
