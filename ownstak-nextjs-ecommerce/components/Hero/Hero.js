import styles from './Hero.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero({ 
  badge,
  title,
  subtitle,
  ctaText,
  ctaLink,
  products = [],
  children
}) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            {badge && (
              <div className={styles.heroBadge}>
                {badge}
              </div>
            )}
            {title && <h1 className={styles.heroTitle}>{title}</h1>}
            {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}
            {ctaText && ctaLink && (
              <Link href={ctaLink} className={styles.heroCta}>
                {ctaText}
              </Link>
            )}
            {children}
          </div>
          
          {products.length > 0 && (
            <div className={styles.heroProducts}>
              {products.map((product, index) => (
                <Link 
                  key={product.id} 
                  href={`/product/${product.id}`} 
                  className={`${styles.heroProductCard} ${index === 0 ? styles.featured : ''}`}
                >
                  {index === 0 && product.onSale && <div className={styles.saleBadge}>Sale</div>}
                  <div className={`${styles.heroProductImage} ${index === 0 ? styles.featured : styles.normal}`}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>
                  <div className={styles.heroProductContent}>
                    <h3 className={styles.heroProductTitle}>{product.name}</h3>
                    <div className={styles.heroProductPricing}>
                      <div className={styles.heroCurrentPrice}>${product.price}</div>
                      {product.originalPrice && (
                        <div className={styles.heroOriginalPrice}>${product.originalPrice}</div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 