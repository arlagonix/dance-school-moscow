export type TrainerType = {
  /** Trainer's slug in URL */
  slug: TrainerSlug
  /** Trainer name */
  name: string
  /** Trainer description */
  description?: string[]
  /** Page description */
  pageDescription?: string[]
  /** Page description but in markdown */
  markDownPageDescription?: string
  /** Trainer ranks (DnD, classic, etc.) */
  ranks?: string[]
  /** Source of the trainer avatar image */
  imgSrc: string
  /** About the teacher in cards */
  aboutCards?: {
    title: string
    description?: string
  }[]
  /** Trainer's achievements */
  achievements?: {
    title: string
    description?: string
  }[]
  photos?: string[]
  videos?: string[]
  socialMedia?: SocialMediaType[]
}

export type SocialMediaType = {
  type: 'vk' | 'radioHustle'
  id: string
  url: string
}

export type TrainerSlug =
  | 'roman_samohvalov'
  | 'daria_koshevaya'
  | 'leonid_leonov'
  | 'daria_samohvalova'
  | 'alexander_nosov'
  | 'anna_stramilova'
  | 'vyacheslav_vyazov'
  | 'victoria_balganova'
  | 'maxim_yaremchuk'
  | 'anna_vasilieva'
  | 'tatiana_parol'
