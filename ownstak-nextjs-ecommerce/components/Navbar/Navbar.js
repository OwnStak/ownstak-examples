import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCart } from '../../context/CartContext';
import { ShoppingBagIcon } from '../Icons/Icons';
import { categories } from '../../data/categories';
import styles from './Navbar.module.css';

const NavLink = ({ href, children, isActive, className = '' }) => (
  <Link 
    href={href} 
    className={`${styles.navLink} ${isActive ? styles.active : ''} ${className}`}
    prefetch={true}
  >
    {children}
  </Link>
);

const CartLink = ({ itemCount, isActive }) => (
  <NavLink href="/cart" isActive={isActive} className={styles.cartLink}>
    <ShoppingBagIcon className={`${styles.w5} ${styles.h5}`} />
    {itemCount > 0 && (
      <span className={styles.cartBadge}>{itemCount}</span>
    )}
  </NavLink>
);

const CategorySubmenu = () => (
  <div className={styles.submenu}>
    <div className={styles.submenuContainer}>
      {categories.map((category) => (
        <Link 
          key={category.id} 
          href={`/products/${category.id}`} 
          className={styles.submenuLink}
          prefetch={true}
        >
          {category.name}
        </Link>
      ))}
    </div>
  </div>
);

export default function Navbar() {
  const router = useRouter();
  const { getCartItemsCount } = useCart();
  const itemCount = getCartItemsCount();

  const isActive = (pathname) => {
    if (pathname === '/' && router.pathname === '/') return true;
    if (pathname !== '/' && router.pathname.startsWith(pathname)) return true;
    return false;
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <Link href="/" className={styles.navbarBrand}>
            FurnitureLand
          </Link>
          <div className={styles.navLinks}>
            <NavLink href="/" isActive={isActive('/')}>
              Home
            </NavLink>
            <NavLink href="/products" isActive={isActive('/products')}>
              Products
            </NavLink>
            <NavLink href="/about" isActive={isActive('/about')}>
              About Us
            </NavLink>
            <CartLink itemCount={itemCount} isActive={isActive('/cart')} />
          </div>
        </div>
      </nav>
      <CategorySubmenu />
    </>
  );
} 