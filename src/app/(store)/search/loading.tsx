import { Skeleton } from '@/components/skeleton'
import { CurrentSearch } from './currentSearch'
import { Suspense } from 'react'

export default function Loading() {
  return (
    <div className="flex flex-col gap-4">
      <Suspense fallback={null}>
        <CurrentSearch />
      </Suspense>

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
