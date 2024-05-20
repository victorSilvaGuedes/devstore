import { Header } from '@/components/header'

export default function LayoutStore({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="text-zinc-100 mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[min-content_max-content] gap-5 p-8">
      <Header />
      {children}
    </div>
  )
}
