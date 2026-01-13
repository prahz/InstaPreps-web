import React from 'react';
import Head from 'next/head';
import Header from 'src/components/header';
import Footer from 'src/components/footer';
import VerticalSidebar from 'src/components/VerticalSidebar';

const privacy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Instapreps</title>
      </Head>

      {/* <Header /> */}
      <VerticalSidebar/>

      <div style={styles.container}>
        <h1 style={styles.title}>Privacy Policy for Instapreps</h1>
        <p style={styles.lastUpdated}>
          <em>Last updated: 29th nov 2024</em>
        </p>

        <section style={styles.section}>
          <h2>1. Introduction</h2>
          <p>
            Instapreps (“we”, “us”, or “our”) values the privacy of our users (“you” or “your”). This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when you visit our website{' '}
            <a href='http://www.instapreps.com' style={styles.link}>
              www.instapreps.com
            </a>{' '}
            (“Website”), or use our services. Please read this policy carefully to understand our views and practices
            regarding your personal information and how we treat it.
          </p>
        </section>

        <section style={styles.section}>
          <h2>2. Information We Collect</h2>
          <p>We may collect and process the following types of information:</p>
          <ul>
            <li>
              <strong>Personal Information:</strong> Information such as your name, email address, phone number, and
              other contact details when you register or subscribe to our services.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about your interactions with our Website, such as IP address,
              browser type, device information, pages visited, time spent on pages, and click behavior.
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong> We may use cookies and similar tracking technologies to
              track activity on our Website. You can manage your cookie preferences in your browser settings.
            </li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2>3. How We Use Your Information</h2>
          <p>We may use the collected data for various purposes, including to:</p>
          <ul>
            <li>Provide, operate, and maintain our Website and services.</li>
            <li>Communicate with you, including responding to your inquiries, updates, and offers.</li>
            <li>Improve our Website and personalize your experience.</li>
            <li>Monitor usage and analyze trends to improve our services.</li>
            <li>Detect, prevent, and address technical issues and ensure the security of our systems.</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2>4. Sharing Your Information</h2>
          <p>
            We do not sell, rent, or trade your personal information with third parties. However, we may share your
            information in the following situations:
          </p>
          <ul>
            <li>
              <strong>Service Providers:</strong> With third-party vendors to perform specific functions such as
              analytics, email delivery, and payment processing.
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law or if we believe that such action is necessary
              to comply with legal obligations or protect our rights and safety.
            </li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2>5. Data Security</h2>
          <p>
            We implement reasonable measures to protect your information from unauthorized access, alteration,
            disclosure, or destruction. However, please note that no method of transmission over the internet or
            electronic storage is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section style={styles.section}>
          <h2>6. Your Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, such as:</p>
          <ul>
            <li>Accessing and updating your personal data.</li>
            <li>Requesting deletion of your data.</li>
            <li>Objecting to or restricting processing of your data.</li>
            <li>Withdrawing your consent where consent was required for data collection.</li>
          </ul>
          <p>
            To exercise these rights, please contact us at{' '}
            <a href='mailto:support@instapreps.com' style={styles.link}>
              contact@instapreps.com
            </a>
            .
          </p>
        </section>

        <section style={styles.section}>
          <h2>7. Third-Party Links</h2>
          <p>
            Our Website may contain links to other websites. We are not responsible for the privacy practices of these
            third-party sites, and we encourage you to review their privacy policies.
          </p>
        </section>

        <section style={styles.section}>
          <h2>8. Changes to Our Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the “Last updated” date. Your continued use of our services
            constitutes acceptance of the updated Privacy Policy.
          </p>
        </section>

        <section style={styles.section}>
          <h2>9. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{' '}
              <a href='mailto:support@instapreps.com' style={styles.link}>
                anup@instaprepsai.com
                <br />
                anupraaj122@gmail.com
              </a>
            </li>
            <li>
              <strong>Address:</strong> KAILASH BUSINESS PARK, C-712, HMPL Surya Nagar, Vikhroli West, Mumbai,
              Maharashtra 400079
            </li>
          </ul>
        </section>

        <footer style={styles.footer}>&copy; {new Date().getFullYear()} Instapreps. All rights reserved.</footer>
      </div>

      <Footer />
    </>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#fff',
    color: '#333',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
  },
  title: {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '20px'
  },
  lastUpdated: {
    textAlign: 'center',
    fontSize: '0.9em',
    color: '#666'
  },
  section: {
    marginBottom: '30px'
  },
  link: {
    color: '#2980b9',
    textDecoration: 'none'
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    marginTop: '50px',
    backgroundColor: '#2c3e50',
    color: '#fff'
  }
};

export default privacy;
