import { z } from 'zod'
import data from '../data.json'

export async function GET(
  _: Request,
  { params }: { params: { slug: string } },
) {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // valida se o slug é uma string
  const slug = z.string().parse(params.slug)

  // encontra o produto no .json baseado em seu slug
  const product = data.products.find((product) => product.slug === slug)
  if (!product) {
    return Response.json({ message: 'Product not found' }, { status: 400 })
  }

  return Response.json(product)
}
