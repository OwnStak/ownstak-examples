import styles from './Typography.module.css';

export function PageTitle({ children, className = '' }) {
  return <h1 className={`${styles.pageTitle} ${className}`}>{children}</h1>;
}

export function PageText({ children, className = '' }) {
  return <p className={`${styles.pageText} ${className}`}>{children}</p>;
}

export function PromiseBox({ title, children, className = '' }) {
  return (
    <div className={`${styles.promiseBox} ${className}`}>
      {title && <h2 className={styles.promiseTitle}>{title}</h2>}
      {children}
    </div>
  );
}

export function PromiseList({ children, className = '' }) {
  return <ul className={`${styles.promiseList} ${className}`}>{children}</ul>;
}

export function PromiseListItem({ children, icon, className = '' }) {
  return (
    <li className={`${styles.promiseListItem} ${className}`}>
      {icon && <span className={styles.promiseIcon}>{icon}</span>}
      {children}
    </li>
  );
} 