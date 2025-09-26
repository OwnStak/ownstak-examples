export default function handler(req, res) {
  const { id: productId } = req.query;
  
  // Generate some fake reviews
  const reviews = [
    {
      id: 1,
      productId,
      name: 'Alice',
      rating: 5,
      date: '2024-05-01',
      text: 'Absolutely love this product! High quality and fast shipping.'
    },
    {
      id: 2,
      productId,
      name: 'Bob',
      rating: 4,
      date: '2024-04-20',
      text: 'Very comfortable and looks great in my living room.'
    },
    {
      id: 3,
      productId,
      name: 'Charlie',
      rating: 3,
      date: '2024-03-15',
      text: 'Good value for the price, but shipping was a bit slow.'
    }
  ];
  res.setHeader('cache-control', 'public, max-age=0, s-maxage=300');
  res.status(200).json({ reviews });
} 