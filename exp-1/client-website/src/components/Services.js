import React from 'react';

function Services() {
  const styles = {
    section: {
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#f4f4f4',
    },
    title: {
      fontSize: '24px',
      marginBottom: '10px',
      color: '#333',
    },
    serviceList: {
      listStyle: 'none',
      padding: '0',
    },
    serviceItem: {
      fontSize: '18px',
      margin: '10px 0',
      color: '#555',
    },
  };

  return (
    <section id="services" style={styles.section}>
      <h2 style={styles.title}>Our Services</h2>
      <ul style={styles.serviceList}>
        <li style={styles.serviceItem}>
          <span style={styles.serviceTitle}>Web Development</span>
          <p>We specialize in creating responsive, user-friendly websites that are tailored to meet your business goals...</p>
        </li>
        <li style={styles.serviceItem}>
          <span style={styles.serviceTitle}>Mobile App Development</span>
          <p>Our mobile app development services are designed to bring your ideas to life...</p>
        </li>
        <li style={styles.serviceItem}>
          <span style={styles.serviceTitle}>Digital Marketing</span>
          <p>Maximize your online presence with our comprehensive digital marketing services...</p>
        </li>
        <li style={styles.serviceItem}>
          <span style={styles.serviceTitle}>Graphic Design</span>
          <p>Our graphic design services encompass everything from logo creation and branding to print and digital media design...</p>
        </li>
        <li style={styles.serviceItem}>
          <span style={styles.serviceTitle}>IT Consulting</span>
          <p>Our IT consulting services provide you with expert guidance on how to leverage technology...</p>
        </li>
        <li style={styles.serviceItem}>
          <span style={styles.serviceTitle}>Content Creation</span>
          <p>Engage your audience with compelling content that resonates with their needs and interests...</p>
        </li>
      </ul>
    </section>
  );
}

export default Services;
