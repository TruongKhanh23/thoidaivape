import client from '@/contentfulConfig'
import { collection } from 'firebase/firestore'

/**
 * Get collection details by ID.
 * @param {string} collectionId
 * @returns {Promise<object>}
 */
export async function getCollectionDetails(id) {
  const query = {
    content_type: 'collection',
    'fields.id': id,
  }
  const response = await client.getEntries(query)
  const collection = response.items[0]
  const collectionId = collection?.sys?.id ?? null

  const result = collectionId
    ? {
        id: collection.sys.id,
        name: collection.fields.name,
        description: collection.fields.description,
      }
    : {}
  return result
}

export async function getAllCollections() {
  const query = {
    content_type: 'collection',
  }
  const response = await client.getEntries(query)

  return response.items.map((item) => {
    return {
      ...item.fields,
      sysId: item.sys.id,
    }
  })
}

/**
 * Get products by collection ID with pagination and filtering options.
 * @param {string} collectionId
 * @param {number} page
 * @param {object} filters
 * @returns {Promise<{products: object[], total: number}>}
 */
export async function getProductsByCollection(collectionId, page = 1, filters = {}) {
  filters = {
    priceRange: filters.priceRange || [null, null],
    power: filters.power || [null, null],
    ...filters, // Giữ các thuộc tính khác
  }

  const query = {
    content_type: 'product',
    'fields.collectionId': collectionId,
  }

  if (filters.priceRange[0] !== null) query['fields.price[gte]'] = filters.priceRange[0]
  if (filters.priceRange[1] !== null) query['fields.price[lte]'] = filters.priceRange[1]
  if (filters.power[0] !== null) query['fields.power[gte]'] = filters.power[0]
  if (filters.power[1] !== null) query['fields.power[lte]'] = filters.power[1]

  const response = await client.getEntries(query)
  const result = {
    products: response.items.map((item) => ({
      id: item.sys.id,
      name: item.fields.name,
      description: item.fields.shortDescription,
      price: item.fields.price,
      salePrice: item.fields.salePrice,
      thumbnail: item.fields.thumbnail?.fields?.file?.url || '',
      brand: item.fields.brand,
      power: item.fields.power,
      soldAmount: item.fields.soldAmount,
    })),
    total: response.total,
  }
  console.log('result', result)

  return result
}

/**
 * Extract unique brands from product list.
 * @param {object[]} products
 * @returns {string[]}
 */
export function extractBrands(products) {
  return [...new Set(products.map((product) => product.brand))]
}

/**
 * Filter products based on predefined price ranges.
 * @returns {object[]}
 */
export function getPriceRanges() {
  return [
    { label: 'Dưới 500K', range: [null, 500000] },
    { label: '500K - 1M', range: [500000, 1000000] },
    { label: 'Trên 1M', range: [1000000, null] },
  ]
}

/**
 * Filter products based on power ranges.
 * @returns {object[]}
 */
export function getPowerRanges() {
  return [
    { label: 'Dưới 50W', range: [null, 50] },
    { label: '50W - 100W', range: [50, 100] },
    { label: 'Trên 100W', range: [100, null] },
  ]
}

/**
 * Filter products based on puff count.
 * @returns {object[]}
 */
export function getPuffRanges() {
  return [
    { label: 'Dưới 100', range: [null, 100] },
    { label: '100 - 200', range: [100, 200] },
    { label: 'Trên 200', range: [200, null] },
  ]
}
