import Layout from '../components/Layout/Layout';

export default function Privacy() {
  return (
    <Layout title="Privacy Policy">
      <div style={{maxWidth: 800, margin: '0 auto', padding: '2rem 1rem'}}>
        <h1>Privacy Policy</h1>
        <p>Your privacy is important to us. This policy explains how FurnitureLand collects, uses, and protects your information.</p>
        <h2>1. Information We Collect</h2>
        <p>We collect information you provide when placing an order, creating an account, or contacting us.</p>
        <h2>2. How We Use Information</h2>
        <p>We use your information to process orders, provide customer service, and improve our website.</p>
        <h2>3. Cookies</h2>
        <p>We use cookies to enhance your browsing experience. You can disable cookies in your browser settings.</p>
        <h2>4. Data Security</h2>
        <p>We implement security measures to protect your data, but cannot guarantee absolute security.</p>
        <h2>5. Third-Party Services</h2>
        <p>We may use third-party services for payment processing and analytics. These providers have their own privacy policies.</p>
        <h2>6. Changes to Policy</h2>
        <p>We may update this policy from time to time. Please review it periodically for changes.</p>
        <p>If you have any questions, please <a href="/about">contact us</a>.</p>
      </div>
    </Layout>
  );
} 