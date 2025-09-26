import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { StarIcon, ShoppingBagIcon } from '../Icons/Icons';
import { useCart } from '../../context/CartContext';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  // Render up to 5 stars, supporting half-stars, all white
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<StarIcon key={i} className={`${styles.w4} ${styles.h4} ${styles.textWhite}`} filled={true} />);
      } else if (i === fullStars && hasHalfStar) {
        // For half-star, use filled for now (since no half-star icon)
        stars.push(<StarIcon key={i} className={`${styles.w4} ${styles.h4} ${styles.textWhite}`} filled={true} />);
      } else {
        stars.push(<StarIcon key={i} className={`${styles.w4} ${styles.h4} ${styles.textWhite}`} filled={false} />);
      }
    }
    return stars;
  };

  const handleQuickAdd = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    const productWithColor = {
      ...product,
      selectedColor: selectedColor,
      colorId: `${product.id}-${selectedColor.name}`
    };
    await addToCart(productWithColor, 1);
    setTimeout(() => setIsAdding(false), 500);
  };

  return (
    <Link href={`/product/${product.id}`} className={styles.productCard}>
      <div className={styles.productImageContainer}>
        {/* Star overlay in top-left */}
        <div className={styles.productCardStarsOverlay}>
          {renderStars(product.rating)}
        </div>
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>
      <div className={styles.productContent}>
        <h3 className={styles.productTitle}>{product.name}</h3>
        <div className={styles.colorSelector}>
          <div className={styles.colorOptions}>
            {product.colors.map((color) => (
              <button
                key={color.name}
                className={`${styles.colorOption} ${selectedColor.name === color.name ? styles.selected : ''}`}
                style={{ backgroundColor: color.value }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedColor(color);
                }}
                title={color.name}
              />
            ))}
          </div>
        </div>
        <div className={styles.productPricingRow}>
          <div className={styles.productPricing}>
            <div className={styles.currentPrice}>${product.price}</div>
            {product.originalPrice && (
              <div className={styles.originalPrice}>${product.originalPrice}</div>
            )}
          </div>
          <button
            className={styles.quickAddToCartBtnSquare}
            title="Add to cart"
            onClick={handleQuickAdd}
            disabled={isAdding}
          >
            <ShoppingBagIcon className={`${styles.w5} ${styles.h5}`} />
          </button>
        </div>
      </div>
    </Link>
  );
} 