import { z } from 'zod'
import data from '../data.json'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  // recuperando o parametro de busca da url
  const { searchParams } = request.nextUrl

  // verifica se o parametro é a string product
  const query = z.string().parse(searchParams.get('product'))

  // encontra todos produtos que possuem aquela query em seu nome
  const products = data.products.filter((product) => {
    return product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  })

  return Response.json(products)
}
