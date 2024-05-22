'use client'

import { Search } from 'lucide-react'
import { InputFocusBlur } from '../input'
import { FormEvent } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get('product')
  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)
    console.log(data)

    const query = data.product

    if (!query) return null

    router.push(`/search?product=${query}`)
  }
  return (
    <form onSubmit={handleSearch} className="w-[320px]">
      <InputFocusBlur
        name="product"
        placeholder={query ? '' : 'Buscar produtos...'}
        defaultValue={query ?? ''}
      >
        <button type="submit">
          <Search />
        </button>
      </InputFocusBlur>
    </form>
  )
}
