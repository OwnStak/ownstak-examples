export default function handler(req, res) {
  const { id: productId } = req.query;

  // Generate some fake product info
  const info = {
    productId,
    dimensions: '80 x 35 x 30 inches',
    weight: '120 lbs',
    materials: 'Solid wood, Velvet upholstery',
    warranty: '2 years',
    countryOfOrigin: 'Italy',
    care: 'Wipe clean with a damp cloth.'
  };
  res.setHeader('cache-control', 'public, max-age=0, s-maxage=300');
  res.status(200).json({ info });
} 