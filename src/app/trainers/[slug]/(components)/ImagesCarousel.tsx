'use client'

import Lightbox from 'yet-another-react-lightbox'
import { trainersData } from '@/data/trainersData'

import {
  Fullscreen,
  Inline,
  // Thumbnails,
  Zoom,
  Counter,
  Download,
} from 'yet-another-react-lightbox/plugins'

import 'yet-another-react-lightbox/plugins/counter.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/styles.css'

// import { Paragraph, Title } from "@/components";
// import slides from "@/data/slides";

export default function ImagesCarousel() {
  return (
    <>
      <div className="mx-auto mt-6 aspect-[3/2] w-full max-w-[1000px]">
        <Lightbox
          animation={{
            zoom: 100,
            swipe: 300,
          }}
          slides={trainersData[0]?.photos?.map((item) => ({
            src: item,
          }))}
          carousel={{
            padding: 0,
          }}
          zoom={{
            scrollToZoom: true,
            wheelZoomDistanceFactor: 200,
            maxZoomPixelRatio: 10,
          }}
          // https://stackblitz.com/edit/yet-another-react-lightbox-examples?file=src%2Fexamples%2FThumbnailsPlugin.tsx&initialPath=/plugins/thumbnails
          // thumbnails={{
          //   border: 0,
          //   padding: 0,
          //   showToggle: true,
          //   imageFit: 'cover',
          // }}
          plugins={[Inline, Zoom, Fullscreen, Download, Counter]}
        />
      </div>
    </>
  )
}
