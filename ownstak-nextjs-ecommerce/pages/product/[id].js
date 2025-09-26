import Layout from '../../components/Layout/Layout';
import { useRouter } from 'next/router';
import { useCart } from '../../context/CartContext';
import { useState } from 'react';
import ProductDetail from '../../components/ProductDetail/ProductDetail';

export default function ProductDetailPage({ product, reviews, info, similarProducts }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [isAdding, setIsAdding] = useState(false);
  const [isBuying, setIsBuying] = useState(false);

  if (router.isFallback) {
    return (
      <Layout title="Loading...">
        <div>Loading...</div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout title="Product Not Found">
        <div>Product not found</div>
      </Layout>
    );
  }

  const handleAddToCart = async () => {
    setIsAdding(true);
    const productWithColor = {
      ...product,
      selectedColor: selectedColor,
      colorId: `${product.id}-${selectedColor.name}`
    };
    await addToCart(productWithColor, quantity);
    setTimeout(() => {
      setIsAdding(false);
    }, 500);
  };

  const handleBuyNow = async () => {
    setIsBuying(true);
    const productWithColor = {
      ...product,
      selectedColor: selectedColor,
      colorId: `${product.id}-${selectedColor.name}`
    };
    await addToCart(productWithColor, quantity);
    setTimeout(() => {
      setIsBuying(false);
      router.push('/cart');
    }, 500);
  };

  return (
    <Layout title={`${product.name}`}>
      <ProductDetail
        product={product}
        reviews={reviews}
        info={info}
        similarProducts={similarProducts}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
        isAdding={isAdding}
        isBuying={isBuying}
        quantity={quantity}
        onQuantityChange={setQuantity}
        selectedColor={selectedColor}
        onColorChange={setSelectedColor}
      />
    </Layout>
  );
}

export async function getServerSideProps({ params, req }) {
  // Unsafe: Only for demostration purposes
  const host = req.headers['x-forwarded-host'].split(',').pop() || `127.0.0.1:${process.env.PORT}`;
  const protocol = req.headers['x-forwarded-proto'].split(',').pop() || 'http';
  const baseUrl = `${protocol}://${host}`;

  // Fetch product by id
  const productRes = await fetch(`${baseUrl}/api/products/${params.id}`);
  let product = null;
  if (productRes.ok) {
    product = await productRes.json();
  }
  if (!product) {
    return { notFound: true };
  }

  // Fetch reviews, info and similar products in parallel
  const [reviewsRes, infoRes, similarProductsRes] = await Promise.all([
    fetch(`${baseUrl}/api/products/${params.id}/reviews`),
    fetch(`${baseUrl}/api/products/${params.id}/info`),
    fetch(`${baseUrl}/api/products?limit=4`)
  ]);

  const [reviewsData, infoData, similarProductsData] = await Promise.all([
    reviewsRes.json(),
    infoRes.json(),
    similarProductsRes.json()
  ]);

  let similarProducts = [];
  if (similarProductsData.products) {
    similarProducts = similarProductsData.products.filter((p) => p.id !== product.id)
  }

  return {
    props: {
      product,
      reviews: reviewsData.reviews || [],
      info: infoData.info || {},
      similarProducts,
    },
  };
} 