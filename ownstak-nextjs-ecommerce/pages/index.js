import Layout from '../components/Layout/Layout';
import ProductCard from '../components/ProductCard/ProductCard';
import Hero from '../components/Hero/Hero';
import Section from '../components/Section/Section';
import FeatureCard from '../components/FeatureCard/FeatureCard';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import Button from '../components/Button/Button';
import { products } from '../data/products';
import Link from 'next/link';
import { FireIcon, SparkleIcon, LeafIcon, TruckIcon, ArrowRightIcon } from '../components/Icons/Icons';

export default function Home() {
  const featuredProducts = products.filter(product => product.featured);
  const saleProducts = products.slice(0, 3); // First 3 products for hero

  // Prepare hero products with sale flag
  const heroProducts = saleProducts.map((product, index) => ({
    ...product,
    onSale: index === 0
  }));

  const badge = (
    <>
      <FireIcon style={{ width: '1em', height: '1em' }} />
      <span>Spring Sale - Up to 40% Off</span>
    </>
  );

  return (
    <Layout fullWidth={true}>
      {/* Hero Section with Featured Products */}
      <Hero
        badge={badge}
        title="Transform Your Space with Premium Furniture"
        subtitle="Discover our curated collection of modern furniture designed to elevate your living space. Quality craftsmanship meets contemporary style."
        ctaText={
          <>
            Shop Collection
            <ArrowRightIcon style={{ width: '1rem', height: '1rem' }} />
          </>
        }
        ctaLink="/products"
        products={heroProducts}
      />

      {/* Features Section */}
      <Section
        title="Why Choose Our Furniture"
        subtitle="We're committed to providing exceptional furniture that enhances your lifestyle"
        className="features-section"
      >
        <ProductGrid variant="features">
          <FeatureCard
            icon={<SparkleIcon style={{ width: '1.5rem', height: '1.5rem' }} />}
            title="Premium Quality"
            description="Each piece is crafted with attention to detail using premium materials that ensure lasting durability and timeless appeal."
          />
          <FeatureCard
            icon={<LeafIcon style={{ width: '1.5rem', height: '1.5rem' }} />}
            title="Sustainable Design"
            description="We prioritize eco-friendly materials and sustainable manufacturing processes to protect our planet for future generations."
          />
          <FeatureCard
            icon={<TruckIcon style={{ width: '1.5rem', height: '1.5rem' }} />}
            title="Free White-Glove Delivery"
            description="Enjoy complimentary professional delivery and setup service for all orders, ensuring your furniture arrives in perfect condition."
          />
        </ProductGrid>
      </Section>

      {/* Featured Products Section */}
      <Section
        title="Featured Collection"
        subtitle="Handpicked pieces that represent the best of our furniture collection"
      >
        <ProductGrid>
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Button variant="primary" href="/products">
            View All Products
            <ArrowRightIcon style={{ width: '1rem', height: '1rem' }} />
          </Button>
        </div>
      </Section>
    </Layout>
  );
}
