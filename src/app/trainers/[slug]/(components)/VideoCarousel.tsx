'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Virtual } from 'swiper/modules'
import './customSwiperStyles.css'

import { convertToEmbedLink } from '@/lib/utils'

type VideoCarouselProps = {
  videos: string[]
}

const VideoCarousel = ({ videos }: VideoCarouselProps) => {
  return (
    <div className="mt-6">
      <Swiper
        modules={[Navigation, Pagination, Virtual]}
        navigation
        virtual
        spaceBetween={50}
        slidesPerView={1}
      >
        {videos.reduce((acc: React.ReactNode[], url, index) => {
          const [videoType, embedLink] = convertToEmbedLink(url)
          if (videoType === 'unknown' || embedLink === null) return acc
          if (videoType === 'youtube')
            return [
              ...acc,
              <SwiperSlide key={index}>
                <div className="mb-12 aspect-[3/2] w-full select-none">
                  <iframe
                    width="100%"
                    height="100%"
                    src={embedLink}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </SwiperSlide>,
            ]
          return [
            ...acc,
            <SwiperSlide key={index}>
              <div className="mb-12 aspect-[3/2] w-full select-none">
                <iframe
                  src={embedLink}
                  width="100%"
                  height="100%"
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                  allowFullScreen
                />
              </div>
            </SwiperSlide>,
          ]
        }, [])}
      </Swiper>
    </div>
  )
}

export default VideoCarousel
