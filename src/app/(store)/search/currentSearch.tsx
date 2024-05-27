'use client'

import { useSearchParams } from 'next/navigation'

export function CurrentSearch() {
  const searchParams = useSearchParams()
  const query = searchParams.get('product')
  return (
    <p className="text-sm">
      Resultados para: <span className="font-semibold">{query ?? ''}</span>
    </p>
  )
}
