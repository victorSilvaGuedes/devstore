import { Skeleton } from '@/components/skeleton'

export default function Loading() {
  return (
    <div className="grid max-h-[860px] grid-cols-3 items-center">
      <Skeleton className="col-span-2 h-[860px]" />
      <Skeleton className="mx-12 h-[430px]" />
    </div>
  )
}
