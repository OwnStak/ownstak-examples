import { products } from '../../../data/products';

export default function handler(req, res) {
  const { page = 1, limit = 20, category } = req.query;
  const pageNum = Number(page || 1);
  const limitNum = Number(limit || 20);
  let filteredProducts = products;
  
  if (category) {
    filteredProducts = products.filter(
      (p) => p.category && p.category.toLowerCase() === category.toLowerCase()
    );
  }

  const start = (pageNum - 1) * limitNum;
  const end = start + limitNum;
  const paginatedProducts = filteredProducts.slice(start, end);

  res.setHeader('cache-control', 'public, max-age=0, s-maxage=300');
  res.status(200).json({
    products: paginatedProducts,
    count: paginatedProducts.length,
    totalCount: filteredProducts.length,
    page: pageNum,
    totalPages: Math.ceil(filteredProducts.length / limitNum),
    limit: limitNum,
    hasMore: end < filteredProducts.length
  });
}