import data from '../data.json'

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const featuredProduct = data.products.filter((product) => product.featured)
  return Response.json(featuredProduct)
}
