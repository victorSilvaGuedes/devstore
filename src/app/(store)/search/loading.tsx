'use client'
import { Skeleton } from '@/components/skeleton'
import { useSearchParams } from 'next/navigation'

export default function Loading() {
  const searchParams = useSearchParams()
  const query = searchParams.get('product')
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query ?? ''}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[430px]" />
        <Skeleton className="h-[430px]" />
        <Skeleton className="h-[430px]" />
        <Skeleton className="h-[430px]" />
        <Skeleton className="h-[430px]" />
        <Skeleton className="h-[430px]" />
      </div>
    </div>
  )
}
