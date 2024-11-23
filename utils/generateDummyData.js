function generateVapeProducts() {
  const productNames = [
    'JUUL Device',
    'Vuse Alto',
    'SMOK Nord 4',
    'GeekVape Aegis X',
    'Vaporesso Luxe PM40',
    'PAX 3',
    'Suorin Air',
    'LUSH Salt Pods',
    'SMOKO Starter Kit',
    'Joyetech eGo AIO',
  ]

  const brands = [
    'JUUL',
    'Vuse',
    'SMOK',
    'GeekVape',
    'Vaporesso',
    'PAX Labs',
    'Suorin',
    'LUSH',
    'SMOKO',
    'Joyetech',
  ]

  const powerOptions = [30, 80, 200] // Công suất cụ thể
  const hitsOptions = [98, 150, 250] // Số hơi cụ thể
  const collectionIds = ['freebase', 'saltnic', 'vape-box', 'podsystem']

  const loremIpsum = () => {
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }

  const tags = [
    '#vape',
    '#vapelife',
    '#vaping',
    '#cloudchasing',
    '#vapor',
    '#vapesociety',
    '#vapedaily',
    '#vapestore',
    '#smokingalternative',
    '#healthylifestyle',
  ]

  const images = [
    '//images.ctfassets.net/yw68m1qjiwhp/4b80KL8NDwFWQtRV3YnO62/2c6f91ea79ea202f76733e21078e5af2/image.png',
    '//images.ctfassets.net/yw68m1qjiwhp/7HN5wGdlYMFXzcJqjgwBGg/618e7865297d95b24baa18bb479e637c/image.png',
    '//images.ctfassets.net/yw68m1qjiwhp/etjF3KebzT6o5fbJ8s0Io/9371ce8e6d1081edecd1b44503962532/image.png',
  ]

  const priceRanges = [
    { min: 100000, max: 499999 }, // Dưới 500K
    { min: 500000, max: 1000000 }, // 500K - 1M
    { min: 1000000, max: 2000000 }, // Trên 1M
  ]

  let products = []

  for (let i = 0; i < 300; i++) {
    const priceRange = priceRanges[Math.floor(Math.random() * priceRanges.length)]
    const price = (Math.random() * (priceRange.max - priceRange.min) + priceRange.min).toFixed(0)
    const salePrice = (Math.random() * (priceRange.max - priceRange.min) + priceRange.min).toFixed(
      0,
    )

    const product = {
      name: productNames[Math.floor(Math.random() * productNames.length)],
      shortDescription: loremIpsum(),
      description: loremIpsum(),
      price: parseInt(price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }), // Định dạng giá VND
      salePrice: parseInt(salePrice).toLocaleString('it-IT', {
        style: 'currency',
        currency: 'VND',
      }),
      thumbnail: images[0], // Fixed thumbnail image
      images: images,
      collectionId: collectionIds[Math.floor(Math.random() * collectionIds.length)],
      tags: tags.slice(0, Math.floor(Math.random() * 5) + 1), // Random 1-5 tags
      soldAmount: Math.floor(Math.random() * 1000), // Random sold amount
      hits: hitsOptions[Math.floor(Math.random() * hitsOptions.length)],
      power: powerOptions[Math.floor(Math.random() * powerOptions.length)],
      brand: brands[Math.floor(Math.random() * brands.length)],
    }

    products.push(product)
  }

  return products
}

console.log(generateVapeProducts())
