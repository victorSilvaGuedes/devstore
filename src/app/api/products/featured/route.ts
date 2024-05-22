import data from '../data.json'

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // encontra os produtos no .json baseado se featured = true
  const featuredProduct = data.products.filter((product) => product.featured)
  return Response.json(featuredProduct)
}
