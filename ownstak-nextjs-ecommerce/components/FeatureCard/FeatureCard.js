import styles from './FeatureCard.module.css';

export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  className = '' 
}) {
  return (
    <div className={`${styles.featureCard} ${className}`}>
      {icon && (
        <div className={styles.featureIcon}>
          {icon}
        </div>
      )}
      {title && <h3 className={styles.featureTitle}>{title}</h3>}
      {description && <p className={styles.featureDescription}>{description}</p>}
    </div>
  );
} 