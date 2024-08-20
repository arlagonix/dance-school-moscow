import RadioHustleIcon from '@/components/svg/radioHustle.svg'
import TelegramIcon from '@/components/svg/telegram.svg'
import VkIcon from '@/components/svg/vk.svg'
import YouTubeIcon from '@/components/svg/youtube.svg'
import { SocialMediaType } from '@/data/trainers/types'
import Link from 'next/link'

const socialMediaMap = {
  vk: {
    icon: <VkIcon width={64} height={64} />,
    name: 'VK',
  },
  radioHustle: {
    icon: <RadioHustleIcon width={64} height={64} />,
    name: 'RadioHustle',
  },
  youtube: {
    icon: <YouTubeIcon width={64} height={64} />,
    name: 'YouTube',
  },
  telegram: {
    icon: <TelegramIcon width={64} height={64} />,
    name: 'Telegram',
  },
}

const SocialMediaCard = ({
  type,
  id,
  url,
  customName,
}: SocialMediaType & {
  customName?: string
}) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="group flex max-w-[372px] flex-[0_1] basis-[372px] justify-between gap-2 rounded-xl border border-slate-100 bg-white p-6 shadow-md transition-shadow hover:shadow-xl mobile:max-w-full mobile:basis-full"
    >
      <div className="flex flex-col justify-between">
        <h3 className="text-xl font-bold text-neutral-900">
          {customName ?? socialMediaMap[type].name}
        </h3>
        <p className="text-slate-500 group-hover:underline">@{id}</p>
      </div>
      {socialMediaMap[type].icon}
    </Link>
  )
}

export default SocialMediaCard
