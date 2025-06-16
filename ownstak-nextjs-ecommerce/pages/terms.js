import Layout from '../components/Layout/Layout';

export default function Terms() {
  return (
    <Layout title="Terms of Service">
      <div style={{maxWidth: 800, margin: '0 auto', padding: '2rem 1rem'}}>
        <h1>Terms of Service</h1>
        <p>Welcome to FurnitureLand. By using our website, you agree to the following terms and conditions. Please read them carefully.</p>
        <h2>1. General</h2>
        <p>FurnitureLand provides modern furniture for sale online. By accessing or using our site, you agree to comply with these terms.</p>
        <h2>2. Orders & Payment</h2>
        <p>All orders are subject to acceptance and availability. Payment must be made in full before items are shipped.</p>
        <h2>3. Shipping & Returns</h2>
        <p>We ship to most locations in the US. Please review our shipping and returns policy for more details.</p>
        <h2>4. Intellectual Property</h2>
        <p>All content on this site is the property of FurnitureLand and may not be used without permission.</p>
        <h2>5. Limitation of Liability</h2>
        <p>FurnitureLand is not liable for any indirect or consequential damages arising from the use of our site or products.</p>
        <h2>6. Changes to Terms</h2>
        <p>We reserve the right to update these terms at any time. Continued use of the site constitutes acceptance of the new terms.</p>
        <p>If you have any questions, please <a href="/about">contact us</a>.</p>
      </div>
    </Layout>
  );
} 