import { describe, it, expect } from 'vitest'
import { convertToEmbedLink } from './utils'

describe('convertToEmbedLink', () => {
  const testCases: [string, [string, string | null]][] = [
    [
      'https://www.youtube.com/watch?v=4WA-9P489ME',
      ['youtube', 'https://www.youtube.com/embed/4WA-9P489ME'],
    ],
    [
      'https://www.youtube.com/watch?v=lJOZN3YhLtY&ab_channel=UnknownDino',
      ['youtube', 'https://www.youtube.com/embed/lJOZN3YhLtY'],
    ],
    ['https://www.youtube.com/watch?ab_channel=UnknownDino', ['unknown', null]],
    [
      'https://www.youtube.com/watch?v=example123&list=PLs6WzHRcoRLZAeoh4iRBQZ2K9tiKET9Pq',
      ['youtube', 'https://www.youtube.com/embed/example123'],
    ],
    [
      'https://m.youtube.com/watch?v=dQw4w9WgXcQ',
      ['youtube', 'https://www.youtube.com/embed/dQw4w9WgXcQ'],
    ],
    [
      'https://www.youtube.com/shorts/Rf0eb8IUSkk',
      ['youtube', 'https://www.youtube.com/embed/Rf0eb8IUSkk'],
    ],
    [
      'https://www.youtube.com/shorts/abc123xyz',
      ['youtube', 'https://www.youtube.com/embed/abc123xyz'],
    ],
    [
      'https://m.youtube.com/shorts/abcdEFGhijk',
      ['youtube', 'https://www.youtube.com/embed/abcdEFGhijk'],
    ],
    [
      'https://www.youtube.com/shorts/123456',
      ['youtube', 'https://www.youtube.com/embed/123456'],
    ],
    [
      'https://www.youtube.com/shorts/9876543210?feature=share',
      ['youtube', 'https://www.youtube.com/embed/9876543210'],
    ],
    [
      'https://youtu.be/LxPWBBOQBU0?si=GYflyWXA9H-yAges',
      ['youtube', 'https://www.youtube.com/embed/LxPWBBOQBU0'],
    ],
    [
      'https://youtu.be/hRgJIigJZbU',
      ['youtube', 'https://www.youtube.com/embed/hRgJIigJZbU'],
    ],
    [
      'https://youtu.be/sF-Lu748zHs',
      ['youtube', 'https://www.youtube.com/embed/sF-Lu748zHs'],
    ],
    [
      'https://vk.com/video-181173397_456239131',
      ['vk', 'https://vk.com/video_ext.php?oid=-181173397&id=456239131&hd=2'],
    ],
    [
      'https://vk.com/clip-34777837_456363281',
      ['vk', 'https://vk.com/video_ext.php?oid=-34777837&id=456363281&hd=2'],
    ],
    ['https://vk.com/unknown_path', ['unknown', null]],
  ]

  testCases.forEach(([input, expectedOutput], index) => {
    it(`should return correct video type and embed link - test case #${index + 1}`, () => {
      expect(convertToEmbedLink(input)).toEqual(expectedOutput)
    })
  })
})
