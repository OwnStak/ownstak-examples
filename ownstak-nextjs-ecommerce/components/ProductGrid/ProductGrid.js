import styles from './ProductGrid.module.css';

export default function ProductGrid({ 
  children, 
  className = '',
  variant = 'default' // 'default', 'features'
}) {
  const gridClass = variant === 'features' ? styles.featuresGrid : styles.productGrid;
  
  return (
    <div className={`${gridClass} ${className}`}>
      {children}
    </div>
  );
} 