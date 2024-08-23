import { schedulesData } from '@/data/schedule'
import { trainersData } from '@/data/trainers'
import type { MetadataRoute } from 'next'
import { DOMAIN } from './robots'

const staticUrls = [
  '/about',
  '/events',
  '/location',
  '/pricing',
  '/rent',
  '/schedule',
  '/shop',
  '/trainers',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: DOMAIN,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...staticUrls.map(
      (item) =>
        ({
          url: `${DOMAIN}${item}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.5,
        }) as const
    ),
    ...trainersData.map(
      (item) =>
        ({
          url: `${DOMAIN}/trainers/${item.slug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.25,
        }) as const
    ),
    ...schedulesData.map(
      (item) =>
        ({
          url: `${DOMAIN}/schedule/${item.slug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.25,
        }) as const
    ),
  ]
}
