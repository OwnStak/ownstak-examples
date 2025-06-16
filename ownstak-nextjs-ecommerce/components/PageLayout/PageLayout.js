import styles from './PageLayout.module.css';

export default function PageLayout({ children, narrow = false, className = '' }) {
  const containerClass = narrow ? styles.pageContainerNarrow : styles.pageContainer;
  
  return (
    <div className={`${containerClass} ${className}`}>
      {children}
    </div>
  );
} 