import { ScheduleGroupType } from './types'
import { continuing } from './continuing'
import { start } from './start'
import { sport } from './sport'
import { special } from './special'

export const schedulesData: ScheduleGroupType[] = [
  start,
  continuing,
  sport,
  special,
]
