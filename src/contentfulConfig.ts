// src/contentfulConfig.ts

import { createClient } from 'contentful'
import urlHostToContentfulConfigsMap from './urlHostToContentfulConfigsMap'

const currentHost = window.location.hostname // Lấy hostname hiện tại

const contentfulConfig =
  urlHostToContentfulConfigsMap[currentHost] || urlHostToContentfulConfigsMap['localhost']

if (!contentfulConfig) {
  throw new Error(`Contentful configuration not found for host: ${currentHost}`)
}

export const space = contentfulConfig.space
export const accessToken = contentfulConfig.accessToken
export const environment = contentfulConfig.environment

const client = createClient({
  space,
  accessToken,
  environment,
})

export default client
