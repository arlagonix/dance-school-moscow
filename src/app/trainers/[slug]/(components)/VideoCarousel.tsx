'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'

// https://stackoverflow.com/a/72279201
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

const VideoCarousel: React.FC = () => {
  const videos = [
    {
      url: 'https://www.youtube.com/embed/bJjCTY7b3I0',
    },
    {
      url: 'https://www.youtube.com/embed/bAFEo853JoY',
    },
    {
      url: 'https://www.youtube.com/embed/nSqvJJDpUfI',
    },
  ]

  return (
    <div className="mt-6">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="mb-12 aspect-[3/2] w-full select-none">
              <iframe
                width="100%"
                height="100%"
                src={video.url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <div className="mb-12 aspect-[3/2] w-full select-none">
            <iframe
              src="https://vk.com/video_ext.php?oid=-181173397&id=456239131&hd=2"
              width="100%"
              height="100%"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
              allowFullScreen
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default VideoCarousel
