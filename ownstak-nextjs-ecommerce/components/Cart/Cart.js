import styles from './Cart.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/Button';
import PageLayout from '../PageLayout/PageLayout';
import { PageTitle } from '../Typography/Typography';
import { MinusIcon, PlusIcon, ArrowRightIcon, TrashIcon } from '../Icons/Icons';

export function EmptyCart() {
  return (
    <PageLayout>
      <div className={styles.emptyCart}>
        <PageTitle>Your Cart is Empty</PageTitle>
        <p className={styles.emptyCartText}>
          Looks like you haven't added any furniture to your cart yet.
        </p>
        <Button variant="primary" href="/products">
          Continue Shopping
          <ArrowRightIcon style={{ width: '1rem', height: '1rem' }} />
        </Button>
      </div>
    </PageLayout>
  );
}

export function CartHeader({ itemCount }) {
  return (
    <div className={styles.cartHeader}>
      <PageTitle>Shopping Cart</PageTitle>
      <p className={styles.cartSubtitle}>
        {itemCount} item{itemCount !== 1 ? 's' : ''} in your cart
      </p>
    </div>
  );
}

export function CartItem({ 
  item, 
  onQuantityChange, 
  onRemove 
}) {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemImage}>
        <Image
          src={item.image}
          alt={item.name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="120px"
        />
      </div>
      <div className={styles.cartItemDetails}>
        <h3 className={styles.cartItemName}>{item.name}</h3>
        <div className={styles.cartItemColor}>
          <span>Color: </span>
          <div className={styles.colorIndicator}>
            <div 
              className={styles.colorSwatch}
              style={{ backgroundColor: item.selectedColor?.value || '#ccc' }}
              title={item.colorName}
            />
            <span>{item.colorName}</span>
          </div>
        </div>
        <p className={styles.cartItemPrice}>${item.price} each</p>
      </div>
      <div className={styles.cartItemControls}>
        <div className={styles.quantityControlRow}>
          <div className={styles.quantityControl}>
            <button 
              onClick={() => onQuantityChange(item.id, item.quantity - 1)}
              className={styles.quantityBtn}
              disabled={item.quantity <= 1}
            >
              <MinusIcon style={{ width: '1rem', height: '1rem' }} />
            </button>
            <span className={styles.quantityDisplay}>{item.quantity}</span>
            <button 
              onClick={() => onQuantityChange(item.id, item.quantity + 1)}
              className={styles.quantityBtn}
            >
              <PlusIcon style={{ width: '1rem', height: '1rem' }} />
            </button>
          </div>
          <button
            className={styles.deleteBtn}
            onClick={() => onRemove(item.id)}
            title="Remove item"
          >
            <TrashIcon style={{ width: '1rem', height: '1rem' }} />
          </button>
        </div>
        <div className={styles.cartItemTotal}>
          ${(item.price * item.quantity).toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export function CartSummary({ 
  subtotal, 
  shipping, 
  tax, 
  total, 
  onCheckout, 
  isCheckingOut 
}) {
  return (
    <div className={styles.cartSummary}>
      <div className={styles.summaryCard}>
        <h3 className={styles.summaryTitle}>Order Summary</h3>
        <div className={styles.summaryLine}>
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className={styles.summaryLine}>
          <span>Shipping:</span>
          <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div className={styles.summaryLine}>
          <span>Tax:</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className={`${styles.summaryLine} ${styles.total}`}>
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <Button 
          onClick={onCheckout}
          disabled={isCheckingOut}
          variant="primary"
          style={{ width: '100%', margin: '1rem 0' }}
        >
          {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
        </Button>
        <Link href="/products" className={styles.continueShopping}>
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default function Cart({ 
  cartItems, 
  onQuantityChange, 
  onRemove, 
  onCheckout, 
  isCheckingOut,
  subtotal,
  shipping,
  tax,
  total
}) {
  return (
    <PageLayout>
      <CartHeader itemCount={cartItems.length} />
      <div className={styles.cartContent}>
        <div className={styles.cartItems}>
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onQuantityChange={onQuantityChange}
              onRemove={onRemove}
            />
          ))}
        </div>
        <CartSummary
          subtotal={subtotal}
          shipping={shipping}
          tax={tax}
          total={total}
          onCheckout={onCheckout}
          isCheckingOut={isCheckingOut}
        />
      </div>
    </PageLayout>
  );
} 