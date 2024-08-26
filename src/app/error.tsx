'use client'

import H1 from '@/components/H1'
import Main from '@/components/Main'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function ErrorPage() {
  return (
    <Main>
      <div className="flex h-[70vh] flex-col items-center justify-center gap-12">
        <H1>Ошибка при загрузке страницы</H1>
        <Link href="/" className={cn(buttonVariants({ variant: 'default' }))}>
          Перейти на главную
        </Link>
      </div>
    </Main>
  )
}
