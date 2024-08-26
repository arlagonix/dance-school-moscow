import { Fragment } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb'

export type BreadcrumbType = {
  /** Text of the breadcrumb */
  title: string
  /** Link of the breadcrumb. Is ignored for the last item */
  link?: string
}

type BreadcrumbsProps = {
  breadcrumbsData: BreadcrumbType[]
}

const Breadcrumbs = ({ breadcrumbsData }: BreadcrumbsProps) => {
  if (breadcrumbsData.length === 0) return null
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbsData.map((item, index, arr) => {
          if (index !== arr.length - 1)
            return (
              <Fragment key={`${item.title}${item.link}`}>
                <BreadcrumbItem>
                  <BreadcrumbLink href={item.link ?? '#'}>
                    {item.title}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </Fragment>
            )
          return (
            <BreadcrumbItem key={`${item.title}${item.link}`}>
              <BreadcrumbPage>{item.title}</BreadcrumbPage>
            </BreadcrumbItem>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

// <div className="flex flex-wrap items-center justify-center gap-x-2 mobile:mt-4 desktop:mt-8">
//   {breadcrumbsData.map((item, index, arr) => {
//     if (index !== arr.length - 1)
//       return (
//         <Fragment key={item.id}>
//           <Link href={item.link ?? '#'} className="hover:underline">
//             {item.title}
//           </Link>
//           <div className="">{'>'}</div>
//         </Fragment>
//       )
//     return (
//       <p key={item.id} className="text-neutral-500">
//         {item.title}
//       </p>
//     )
//   })}
// </div>

export default Breadcrumbs
