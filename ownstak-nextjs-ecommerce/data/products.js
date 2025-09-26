const baseProducts = [
  // Tables
  {
    name: 'Heritage Dining Set',
    shortDescription: 'Handcrafted solid oak dining table with 6 matching chairs.',
    longDescription: 'Handcrafted solid oak dining table with 6 matching chairs, perfect for family gatherings. Built to last with a classic design and premium materials. Ideal for both everyday meals and special occasions.',
    price: 1899.99,
    originalPrice: 2499.99,
    image: '/images/heritage-dining-set.jpg',
    featured: true,
    category: 'tables',
    rating: 4.9,
    colors: [
      { name: "Light Gray", value: "#D3D3D3" },
      { name: "Beige", value: "#F5F5DC" },
      { name: "Dark Brown", value: "#654321" }
    ]
  },
  // Chairs
  {
    name: 'Velvet Accent Chair',
    shortDescription: 'Statement piece with luxurious velvet upholstery.',
    longDescription: 'Statement piece with luxurious velvet upholstery and brass leg accents. Adds a pop of color and sophistication to any room. Comfortable and stylish for reading or relaxing.',
    price: 449.99,
    originalPrice: 649.99,
    image: '/images/velvet-accent-chair.jpg',
    featured: false,
    category: 'chairs',
    rating: 4.6,
    colors: [
      { name: "Charcoal", value: "#36454F" },
      { name: "Cream", value: "#F5F5DC" },
      { name: "Navy", value: "#191970" }
    ]
  },
  // Sofas
  {
    name: 'Luxe Modern Sofa',
    shortDescription: 'Elegant 3-seater sofa with premium velvet upholstery.',
    longDescription: 'Elegant 3-seater sofa with premium velvet upholstery and solid hardwood frame. Perfect for modern living rooms, offering both comfort and style. Features plush cushions and a timeless design that fits any decor.',
    price: 1299.99,
    originalPrice: 1899.99,
    image: '/images/luxe-modern-sofa.jpg',
    featured: true,
    category: 'sofas',
    rating: 4.8,
    colors: [
      { name: "Charcoal", value: "#36454F" },
      { name: "Cream", value: "#F5F5DC" },
      { name: "Navy", value: "#191970" }
    ]
  },
  // Storage
  {
    name: 'Rustic Bookshelf',
    shortDescription: 'Industrial-style bookshelf with reclaimed wood shelves.',
    longDescription: 'Industrial-style bookshelf with reclaimed wood shelves and metal frame. Perfect for displaying books and decor, adding a rustic touch to your home.',
    price: 379.99,
    originalPrice: 529.99,
    image: '/images/rustic-bookshelf.jpg',
    featured: true,
    category: 'storage',
    rating: 4.5,
    colors: [
      { name: "Pine", value: "#FDF5E6" },
      { name: "Cherry", value: "#DE3163" },
      { name: "Mahogany", value: "#C04000" }
    ]
  },
  {
    name: 'Outdoor Patio Set',
    shortDescription: 'Weather-resistant teak dining set for 6.',
    longDescription: 'Weather-resistant teak dining set with cushioned seating for 6. Ideal for outdoor gatherings, combining durability with comfort and style.',
    price: 1599.99,
    originalPrice: 2199.99,
    image: '/images/outdoor-patio-set.jpg',
    featured: false,
    category: 'outdoor',
    rating: 4.2,
    colors: [
      { name: "Natural Teak", value: "#CD853F" },
      { name: "Gray Wash", value: "#A9A9A9" },
      { name: "White Wash", value: "#F5F5DC" }
    ]
  },
  {
    name: 'Designer Floor Lamp',
    shortDescription: 'Modern arc floor lamp with warm LED lighting.',
    longDescription: 'Modern arc floor lamp with adjustable height and warm LED lighting. A stylish addition to any room, providing both illumination and elegance.',
    price: 249.99,
    originalPrice: 349.99,
    image: '/images/designer-floor-lamp.jpg',
    featured: true,
    category: 'lighting',
    rating: 4.6,
    colors: [
      { name: "Brass", value: "#B5651D" },
      { name: "Black", value: "#000000" },
      { name: "Chrome", value: "#C0C0C0" }
    ]
  },
  {
    name: 'Decorative Wall Mirror',
    shortDescription: 'Large circular mirror with ornate gold frame.',
    longDescription: 'Large circular mirror with ornate gold frame, perfect statement piece. Adds depth and light to any space, making rooms feel larger and brighter.',
    price: 189.99,
    originalPrice: 279.99,
    image: '/images/decorative-wall-mirror.jpg',
    featured: false,
    category: 'decor',
    rating: 4.4,
    colors: [
      { name: "Gold", value: "#FFD700" },
      { name: "Silver", value: "#C0C0C0" },
      { name: "Bronze", value: "#CD7F32" }
    ]
  },
  {
    name: 'Modern Platform Bed',
    shortDescription: 'Minimalist platform bed with upholstered headboard.',
    longDescription: 'Minimalist platform bed with upholstered headboard and solid wood frame. Offers sturdy support and a clean, modern look for your bedroom.',
    price: 899.99,
    originalPrice: 1199.99,
    image: '/images/modern-platform-bed.jpg',
    featured: false,
    category: 'beds',
    rating: 4.3,
    colors: [
      { name: "Natural Wood", value: "#DEB887" },
      { name: "White Oak", value: "#F5F5DC" },
      { name: "Dark Walnut", value: "#654321" }
    ]
  }
];

// Generate 1000 products from the base products using modulo
export const products = Array.from({ length: 1000 }, (_, index) => {
  const baseIndex = index % baseProducts.length;
  const baseProduct = baseProducts[baseIndex];
  const id = index + 1;
  return {
    id, // Unique ID from 1 to 1000
    ...baseProduct,
    image: `${baseProduct.image}?${id}`,
    // Only first 50 instances can be featured to add some variety
    featured: baseProduct.featured && index < 50
  };
});
