import styles from './Section.module.css';

export default function Section({ 
  children, 
  title, 
  subtitle, 
  className = '',
  headerOnly = false,
  showHeader = true
}) {
  if (headerOnly) {
    return (
      <div className={`${styles.sectionHeader} ${className}`}>
        {title && <h2 className={styles.sectionTitle}>{title}</h2>}
        {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
      </div>
    );
  }

  return (
    <section className={`${styles.section} ${className}`}>
      <div className={styles.container}>
        {showHeader && (
          <div className={styles.sectionHeader}>
            {title && <h2 className={styles.sectionTitle}>{title}</h2>}
            {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
} 