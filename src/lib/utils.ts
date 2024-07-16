import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertToEmbedLink(
  url: string
): ['vk' | 'youtube' | 'unknown', string | null] {
  const urlObj = new URL(url)

  // Check if the URL is a YouTube URL
  if (
    urlObj.hostname.includes('youtube.com') ||
    urlObj.hostname.includes('youtu.be')
  ) {
    let videoId: string | null = null

    if (urlObj.pathname.startsWith('/watch')) {
      videoId = urlObj.searchParams.get('v')
    } else if (urlObj.pathname.startsWith('/shorts/')) {
      videoId = urlObj.pathname.split('/shorts/')[1]
    } else if (urlObj.hostname.includes('youtu.be')) {
      videoId = urlObj.pathname.slice(1) // Get the part after '/'
    }

    if (videoId) {
      return ['youtube', `https://www.youtube.com/embed/${videoId}`]
    }
  }

  // Check if the URL is a VK URL
  if (urlObj.hostname.includes('vk.com')) {
    let videoId: string | null = null

    if (urlObj.pathname.startsWith('/video')) {
      videoId = urlObj.pathname.split('/video-')[1]
    } else if (urlObj.pathname.startsWith('/clip')) {
      videoId = urlObj.pathname.split('/clip-')[1]
    }

    if (videoId) {
      const [oid, id] = videoId.split('_')
      if (oid && id) {
        return ['vk', `https://vk.com/video_ext.php?oid=-${oid}&id=${id}&hd=2`]
      }
    }
  }

  return ['unknown', null]
}
