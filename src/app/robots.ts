// export const DOMAIN = 'https://non-existing-domain.com'
export const DOMAIN = 'localhost:3000'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: [
          '/api/*',
          '/tmp/',
          '/*?',
          '/*%',
          '/*=',
          '*/*?q',
          '/?',
          '/*id=',
        ],
        allow: ['*.js', '*.css', '*.png', '*.jpg', '*.jpeg', '*.svg'],
      },
      {
        userAgent: 'Googlebot',
        disallow: [
          '/api/*',
          '/tmp/',
          '/*?',
          '/*%',
          '/*=',
          '*/*?q',
          '/?',
          '/*id=',
        ],
        allow: ['*.js', '*.css', '*.png', '*.jpg', '*.jpeg', '*.svg'],
      },
      {
        userAgent: 'Yandex',
        disallow: [
          '/api/*',
          '/tmp/',
          '/*?',
          '/*%',
          '/*=',
          '*/*?q',
          '/?',
          '/*id=',
        ],
        allow: ['*.js', '*.css', '*.png', '*.jpg', '*.jpeg', '*.svg'],
      },
    ],
    sitemap: `${DOMAIN}/sitemap.xml`,
  }
}
