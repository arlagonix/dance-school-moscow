import { ScheduleGroupType } from './types'
import { continuing } from './continuing'
import { start } from './start'
import { sport } from './sport'
import { special } from './special'
import { practice } from './practice'
import { solo } from './solo'
import { kids } from './kids'

export const schedulesData: ScheduleGroupType[] = [
  start,
  continuing,
  sport,
  practice,
  solo,
  kids,
  special,
]
