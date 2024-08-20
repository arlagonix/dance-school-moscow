'use client'

import Lightbox from 'yet-another-react-lightbox'
import {
  Counter,
  Download,
  Fullscreen,
  Inline,
  Zoom,
} from 'yet-another-react-lightbox/plugins'
import 'yet-another-react-lightbox/plugins/counter.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/styles.css'

type ImagesCarouselProps = {
  photos: string[]
}

export default function ImagesCarousel({ photos }: ImagesCarouselProps) {
  return (
    <>
      <div className="mx-auto mt-6 aspect-[3/2] w-full max-w-[1000px]">
        <Lightbox
          animation={{
            zoom: 100,
            swipe: 300,
          }}
          slides={photos.map((item) => ({
            src: item,
          }))}
          carousel={{
            padding: 0,
          }}
          zoom={{
            maxZoomPixelRatio: 10,
          }}
          plugins={[Inline, Zoom, Fullscreen, Download, Counter]}
        />
      </div>
    </>
  )
}
