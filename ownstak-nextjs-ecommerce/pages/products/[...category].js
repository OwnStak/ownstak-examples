import Layout from '../../components/Layout/Layout';
import ProductCard from '../../components/ProductCard/ProductCard';
import Section from '../../components/Section/Section';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import Button from '../../components/Button/Button';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { categories } from '../../data/categories';

export default function Products({ 
  products: initialProducts, 
  page: initialPage, 
  totalCount, 
  totalPages, 
  category: initialCategory 
}) {
  const router = useRouter();

  const [products, setProducts] = useState(initialProducts);
  const [page, setPage] = useState(initialPage);
  const [category, setCategory] = useState(initialCategory);
  const [isLoading, setIsLoading] = useState(false);

  // Compute hasMore based on page and totalPages
  const hasMore = page < totalPages;

  // Reset products when category changes
  useEffect(() => {
    setProducts(initialProducts);
    setPage(initialPage);
    setCategory(initialCategory);
  }, [initialProducts, initialPage, initialCategory]);

  // Infinite scroll effect
  useEffect(() => {
    if (!hasMore || isLoading) return;
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 &&
        hasMore &&
        !isLoading
      ) {
        handleLoadMore();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore, isLoading, category]);

  const handleLoadMore = async () => {
    setIsLoading(true);
    const nextPage = page + 1;
    const categoryParam = category ? `&category=${category}` : '';
    const res = await fetch(`/api/products?page=${nextPage}${categoryParam}`);
    const data = await res.json();
    setProducts([...products, ...data.products]);
    setPage(nextPage);
    setIsLoading(false);
    // Update URL without page reload
    router.push(`/products/${category}?page=${nextPage}`, undefined, { shallow: true });
  };

  // Find the category object if a filter is active
  const categoryObj = category ? categories.find(cat => cat.id === category) : null;
  const title = categoryObj ? categoryObj.name : 'Our Complete Collection';
  const subtitle = totalCount === 0 ? 'There are no products in this category' : `Browse over ${totalCount} unique products`;

  return (
    <Layout title={title}>
      <Section title={title} subtitle={subtitle}>
        <ProductGrid>
          {products.map((product, idx) => (
            <ProductCard key={`${product.id}-${idx}`} product={product} />
          ))}
        </ProductGrid>
        {hasMore && (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Button
              onClick={handleLoadMore}
              disabled={isLoading}
              variant="loadMore"
            >
              {isLoading ? 'Loading...' : 'Load More'}
            </Button>
          </div>
        )}
      </Section>
    </Layout>
  );
}

export async function getServerSideProps({ req, params, query }) {
  // Unsafe: Only for demonstration purposes
  const host = req.headers['x-forwarded-host'].split(',').pop() || `127.0.0.1:${process.env.PORT}`;
  const protocol = req.headers['x-forwarded-proto'].split(',').pop() || 'http';
  const baseUrl = `${protocol}://${host}`;

  const page = Number(query?.page) || 1;
  let category = '';
  if (params?.category && params.category.length > 0) {
    category = params.category[0];
  }

  const apiUrl = new URL('/api/products', baseUrl)
  apiUrl.searchParams.set('page', page)
  if (category) {
    apiUrl.searchParams.set('category', category)
  }

  const res = await fetch(apiUrl)
  const data = await res.json();

  return {
    props: {
      products: data.products || [],
      totalCount: data.totalCount || 0,
      totalPages: data.totalPages || 1,
      page: page,
      category: category || '',
    },
  };
}