interface TextShakeProps {
  children: React.ReactNode
}

export function TextShake({ children }: TextShakeProps) {
  return (
    <span className="text-zinc-100 hover:animate-text-shake truncate text-sm">
      {children}
    </span>
  )
}
