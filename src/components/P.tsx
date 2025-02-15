import { cn } from '@/lib/utils'

type ParagraphProps = {
  children: React.ReactNode
  className?: string
}

// Source: https://ui.shadcn.com/docs/components/typography#p
export default function P({ children, className }: ParagraphProps) {
  return (
    <p className={cn('leading-7 [&:not(:first-child)]:pt-6', className)}>
      {children}
    </p>
  )
}
