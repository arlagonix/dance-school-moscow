'use client'

import Image from 'next/image'
import Link from 'next/link'

import CalendarClockIcon from '@/components/svg/icons_small/calendar-clock.svg'
import DollarIcon from '@/components/svg/icons_small/dollar-sign.svg'
import HomeIcon from '@/components/svg/icons_small/home.svg'
import UsersIcon from '@/components/svg/icons_small/users.svg'
// import SmileIcon from '@/components/svg/icons_small/smile.svg'
import ClockIcon from '@/components/svg/icons_small/clock.svg'
import InfoIcon from '@/components/svg/icons_small/info.svg'
import MailIcon from '@/components/svg/icons_small/mail.svg'
import MapIcon from '@/components/svg/icons_small/map.svg'
import PartyIcon from '@/components/svg/icons_small/party.svg'
import PhoneIcon from '@/components/svg/icons_small/phone-call.svg'
import VkIcon from '@/components/svg/icons_small/vk.svg'

import { Button } from '@/components/ui/button'
import useDisableBodyScrolling from '@/lib/hooks/useDisableScrolling'
import { cn } from '@/lib/utils'
import { SVGProps, useEffect, useState } from 'react'
import ToggleMenu from './ToggleMenu'

type HeaderType = {
  id: number
  name: string
  icon?: React.ReactNode
  link?: string
}

// I just wanna reuse the code. Don't wanna repeat it 10 times
const menuIconProps: SVGProps<SVGElement> = {
  className: 'text-neutral-900',
  width: 16,
  height: 16,
}
const infoSectionIconProps: SVGProps<SVGElement> = {
  className: 'text-neutral-500',
  width: 16,
  height: 16,
}

const linksData: HeaderType[] = [
  {
    id: 1,
    name: 'Главная',
    icon: <HomeIcon {...menuIconProps} />,
    link: '/',
  },
  {
    id: 2,
    name: 'Стоимость занятий',
    icon: <DollarIcon {...menuIconProps} />,
    link: '/pricing',
  },
  {
    id: 3,
    name: 'Расписание',
    icon: <CalendarClockIcon {...menuIconProps} />,
    link: '/schedule',
  },
  {
    id: 4,
    name: 'Преподаватели',
    icon: <UsersIcon {...menuIconProps} />,
    link: '/trainers',
  },
  // {
  //   id: 5,
  //   name: 'Отзывы',
  //   icon: <SmileIcon {...menuIconProps} />,
  // },
  {
    id: 6,
    name: 'Аренда залов',
    icon: <DollarIcon {...menuIconProps} />,
    link: '/rent',
  },
  {
    id: 7,
    name: 'О школе',
    icon: <InfoIcon {...menuIconProps} />,
  },
  {
    id: 8,
    name: 'Мероприятия',
    icon: <PartyIcon {...menuIconProps} />,
  },
  {
    id: 9,
    name: 'Как нас найти',
    icon: <MapIcon {...menuIconProps} />,
    link: '/location',
  },
]

const Menu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const closeMenu = () => setShowMobileMenu(false)
  const toggleMenu = () => setShowMobileMenu((prev) => !prev)
  useDisableBodyScrolling(showMobileMenu)

  useEffect(() => {
    window.addEventListener('popstate', closeMenu) // Listen for popstate events (back/forward navigation)
    window.addEventListener('hashchange', closeMenu) // Optionally listen for hash changes
    return () => {
      window.removeEventListener('popstate', closeMenu)
      window.removeEventListener('hashchange', closeMenu)
    }
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-16 z-10 max-h-screen',
        'mobile:left-1/2 mobile:top-0 mobile:w-[min(100%,var(--standard-width))] mobile:-translate-x-1/2 mobile:bg-white',
        'desktop:left-16 desktop:max-h-[calc(100vh-4rem)]'
      )}
    >
      <div className="hidden desktop:inline">
        <Link href="/">
          <Image
            src="/dance_logo.png"
            width={126}
            height={64}
            alt="Логотип школы D.A.N.C.E."
            draggable={false}
            priority
          />
        </Link>
        <p className="mt-2 text-sm">
          <strong className="font-normal text-neutral-500">
            <span className="font-bold text-red-400">D</span>o the{' '}
            <span className="font-bold">A</span>rt a
            <span className="font-bold text-orange-400">N</span>d{' '}
            <span className="font-bold text-green-500">C</span>reate{' '}
            <span className="font-bold text-blue-400">E</span>motions
          </strong>
        </p>
      </div>
      <div className="fixed top-0 z-20 flex w-[min(100vw,768px)] items-center border-b border-neutral-300 bg-white pr-4 desktop:hidden">
        <ToggleMenu isOpen={showMobileMenu} clickHandler={toggleMenu} />
        <Link
          href="/"
          className="center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
        >
          <Image
            src="/dance_logo.png"
            width={63}
            height={32}
            alt="Логотип школы D.A.N.C.E."
            draggable={false}
          />
        </Link>
      </div>
      <div
        className={cn(
          'mx-auto h-screen mobile:w-[min(100%-8px*2,var(--standard-width))] mobile:pb-4 mobile:pt-10',
          !showMobileMenu && 'mobile:hidden'
        )}
      >
        <ul className="mt-4 desktop:mt-8">
          {linksData.map((item) => (
            <li key={item.id}>
              <Link
                href={item.link ?? '#'}
                onClick={() => {
                  setShowMobileMenu(false)
                }}
                className="group flex translate-x-[-0.5rem] items-center gap-2 rounded-lg p-2 transition-colors hover:bg-slate-200"
              >
                {item.icon}
                <p className="group-hover:underline">{item.name}</p>
              </Link>
            </li>
          ))}
        </ul>
        <hr className="my-4" />
        <ul className="flex flex-col text-neutral-500">
          <li>
            <Link
              href="tel:+74992837793"
              className="flex translate-x-[-0.5rem] items-center gap-2 rounded-lg p-2 transition-colors hover:bg-slate-200"
            >
              <PhoneIcon {...infoSectionIconProps} />
              <p className="font-semibold underline">+7 499 283-77-93</p>
            </Link>
          </li>
          <li>
            <Link
              href="https://yandex.ru/maps/213/moscow/house/ulitsa_obraztsova_14/Z04YcAZgSEcCQFtvfXt5dnVjZg==/?ll=37.610126%2C55.787903&z=17.23"
              className="flex translate-x-[-0.5rem] items-center gap-2 rounded-lg p-2 transition-colors hover:bg-slate-200"
            >
              <MapIcon {...infoSectionIconProps} />
              <p className="font-semibold underline">ул. Образцова, д. 14</p>
            </Link>
          </li>
          <li>
            <span className="flex items-center gap-2 py-2">
              <MailIcon {...infoSectionIconProps} />
              <p>danceschool.moscow@mail.ru</p>
            </span>
          </li>
          <li>
            <Link
              href="https://vk.com/danceschool.moscow"
              className="flex translate-x-[-0.5rem] items-center gap-2 rounded-lg p-2 transition-colors hover:bg-slate-200"
            >
              <VkIcon {...infoSectionIconProps} />
              <p className="underline">Группа VK</p>
            </Link>
          </li>
          <li>
            <span className="flex items-center gap-2 py-2">
              <ClockIcon {...infoSectionIconProps} />
              <p>Ежедневно с 10:00 до 22:00</p>
            </span>
          </li>
        </ul>
        <Button variant="outline" className="mt-4">
          Перезвоните мне
        </Button>
      </div>
    </nav>
  )
}

export default Menu
