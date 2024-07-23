import { TrainerSlug } from '../trainers/types'

export type ScheduleGroupType = {
  slug: string
  title: string
  description: string
  cardIcon: React.ReactNode
  schedules: ScheduleType[]
}

type ScheduleType = {
  title: string
  isNew?: boolean
  subtitle?: string[]
  description?: string[][]
  trainerSlugs: TrainerSlug[]
  info?: string[]
  isButton?: boolean
}
