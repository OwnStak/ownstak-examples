import styles from './Button.module.css';

export default function Button({ 
  children, 
  onClick, 
  href,
  variant = 'primary',
  size = 'medium',
  className = '',
  disabled = false,
  type = 'button',
  ...props 
}) {
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button 
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
} 