export type TrainerType = {
  /**  */
  slug: string
  /** Trainer name */
  name: string
  /** Trainer description */
  description?: string[]
  /** Page description */
  pageDescription?: string[]
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
