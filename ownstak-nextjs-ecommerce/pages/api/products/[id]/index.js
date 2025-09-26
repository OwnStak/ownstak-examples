import { products } from '../../../../data/products';

export default function handler(req, res) {
  const { id } = req.query;
  const product = products.find((p) => p.id === Number(id));
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.setHeader('cache-control', 'public, max-age=0, s-maxage=300');
  res.status(200).json(product);
}
