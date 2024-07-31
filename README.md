clsx, tailwind-merge - to merge all classes without style conflicts

tbd:

[-] - add favicion, title, description

### Svgr

See: https://react-svgr.com/docs/next/#typescript

Helps to turn svg into React Components

Add `svgr.d.ts` in the root:

```ts
declare module '*.svg' {
  import { FC, SVGProps } from 'react'
  const content: FC<SVGProps<SVGElement>>
  export default content
}

declare module '*.svg?url' {
  const content: any
  export default content
}
```

Then you can import them like that:

```tsx
import PartyIcon from '@/components/svg/icons_small/party.svg'
```

### Markdown Typography

https://github.com/tailwindlabs/tailwindcss-typography - Typography in TailwindCSS for Markdown

```tsx
<Markdown className="prose mt-4">{trainer.markDownPageDescription}</Markdown>
```
