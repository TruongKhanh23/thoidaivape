// src/urlHostToContentfulConfigsMap.js

export interface ContentfulConfig {
  space: string
  accessToken: string
  environment: string
}

const urlHostToContentfulConfigsMap: Record<string, ContentfulConfig> = {
  'thoidaivape-dev.vercel.app': {
    space: 'yw68m1qjiwhp',
    accessToken: 'L4Z6EuzJTQfPS_onDjbn1608ytgG2_w0fNpcfORYi6k',
    environment: 'test',
  },
  'thoidaivape-uat.vercel.app': {
    space: 'yw68m1qjiwhp',
    accessToken: 'L4Z6EuzJTQfPS_onDjbn1608ytgG2_w0fNpcfORYi6k',
    environment: 'test',
  },
  'thoidaivape.vercel.app': {
    space: 'yw68m1qjiwhp',
    accessToken: 'DUsAMj3j-A6h-8KQcaO6B-utpJY0g9rhG939QMfkR7o',
    environment: 'master', // Thông thường 'master' là môi trường production
  },
  localhost: {
    space: 'yw68m1qjiwhp',
    accessToken: 'L4Z6EuzJTQfPS_onDjbn1608ytgG2_w0fNpcfORYi6k',
    environment: 'test',
  },
}

export default urlHostToContentfulConfigsMap
