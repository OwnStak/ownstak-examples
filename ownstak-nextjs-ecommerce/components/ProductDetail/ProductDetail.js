import { useState } from 'react';
import Image from 'next/image';
import { StarIcon, MinusIcon, PlusIcon, ShoppingBagIcon, SparkleIcon } from '../Icons/Icons';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductDetail.module.css';

export default function ProductDetail({ 
  product, 
  reviews = [], 
  info = {}, 
  similarProducts = [],
  onAddToCart,
  onBuyNow,
  isAdding = false,
  isBuying = false,
  quantity,
  onQuantityChange,
  selectedColor,
  onColorChange
}) {
  const [activeTab, setActiveTab] = useState('description');

  const renderStars = (rating, colorClass = styles.textYellow500) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<StarIcon key={i} className={`${styles.w4} ${styles.h4} ${colorClass}`} filled={true} />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<StarIcon key={i} className={`${styles.w4} ${styles.h4} ${colorClass}`} filled={true} />);
      } else {
        stars.push(<StarIcon key={i} className={`${styles.w4} ${styles.h4} ${styles.textGray300}`} filled={false} />);
      }
    }
    return stars;
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return;
    onQuantityChange(newQuantity);
  };

  return (
    <div className={styles.productDetail}>
      {/* Main Product Section */}
      <div className={styles.productDetailGrid}>
        {/* Product Image */}
        <div className={styles.productDetailImage}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: 'cover' }}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Product Info */}
        <div className={styles.productDetailContent}>
          <h1 className={styles.productDetailTitle}>{product.name}</h1>
          
          <div className={styles.productRatingDetail}>
            <div className={styles.stars}>
              {renderStars(product.rating)}
            </div>
            <span className={styles.ratingText}>({product.rating})</span>
          </div>
          
          <div className={styles.productDetailPricing}>
            <div className={styles.currentPriceDetail}>${product.price}</div>
            {product.originalPrice && (
              <div className={styles.originalPriceDetail}>${product.originalPrice}</div>
            )}
          </div>
          
          <p className={styles.productDescription}>{product.description}</p>

          {/* Color Selector */}
          <div className={styles.colorSelectorDetail}>
            <span className={styles.colorLabel}>Color: {selectedColor.name}</span>
            <div className={styles.colorOptions}>
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  className={`${styles.colorOptionDetail} ${selectedColor.name === color.name ? styles.selected : ''}`}
                  style={{ backgroundColor: color.value }}
                  onClick={() => onColorChange(color)}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className={styles.quantitySelectorCartStyle}>
            <span className={styles.quantityLabel}>Quantity:</span>
            <div className={styles.quantityControl}>
              <button
                className={styles.quantityBtn}
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1}
              >
                <MinusIcon className={`${styles.w4} ${styles.h4}`} />
              </button>
              <span className={styles.quantityDisplay}>{quantity}</span>
              <button
                className={styles.quantityBtn}
                onClick={() => handleQuantityChange(quantity + 1)}
              >
                <PlusIcon className={`${styles.w4} ${styles.h4}`} />
              </button>
            </div>
          </div>

          {/* Product Actions */}
          <div className={styles.productActions}>
            <button
              onClick={onAddToCart}
              disabled={isAdding}
              className={styles.addToCartButton}
            >
              <ShoppingBagIcon className={`${styles.w5} ${styles.h5}`} />
              {isAdding ? 'Adding...' : 'Add to Cart'}
            </button>
            <button
              onClick={onBuyNow}
              disabled={isBuying}
              className={styles.buyNowButton}
            >
              <SparkleIcon className={`${styles.w5} ${styles.h5}`} />
              {isBuying ? 'Processing...' : 'Buy Now'}
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className={styles.productTabsSection}>
        <div className={styles.productTabs}>
          <button
            className={`${styles.productTab}${activeTab === 'description' ? ` ${styles.active}` : ''}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button
            className={`${styles.productTab}${activeTab === 'reviews' ? ` ${styles.active}` : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </button>
          <button
            className={`${styles.productTab}${activeTab === 'info' ? ` ${styles.active}` : ''}`}
            onClick={() => setActiveTab('info')}
          >
            Product Information
          </button>
        </div>
        
        <div className={styles.productTabContent}>
          {activeTab === 'description' && (
            <div className={styles.tabDescription}>
              <h3>Product Details</h3>
              <p>{product.longDescription || product.description}</p>
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <div className={styles.tabReviews}>
              <h3>Customer Reviews</h3>
              <div className={styles.reviewsList}>
                {reviews.map((review, idx) => (
                  <div className={styles.reviewItem} key={idx}>
                    <div className={styles.reviewHeader}>
                      <span className={styles.reviewName}>{review.name}</span>
                      <span className={styles.reviewDate}>{review.date}</span>
                    </div>
                    <div className={styles.reviewStars}>{renderStars(review.rating)}</div>
                    <div className={styles.reviewText}>{review.text}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'info' && (
            <div className={styles.tabInfo}>
              <h3>Product Information</h3>
              <div className={styles.productInfoTableWrapper}>
                <table className={styles.productInfoTable}>
                  <tbody>
                    {Object.entries(info).map(([label, value], idx) => (
                      <tr key={idx}>
                        <th>{label.charAt(0).toUpperCase() + label.slice(1)}</th>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Similar Products Section */}
      {similarProducts.length > 0 && (
        <div className={styles.similarProductsSection}>
          <h2 className={styles.similarProductsTitle}>You Might Also Like</h2>
          <div className={styles.similarProductsList}>
            {similarProducts.map(product => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 