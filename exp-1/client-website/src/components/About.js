import React from 'react';

function About() {
  const styles = {
    section: {
      padding: '20px',
      textAlign: 'center',
    },
    title: {
      fontSize: '24px',
      marginBottom: '10px',
      color: '#333',
    },
    content: {
      fontSize: '18px',
      color: '#555',
    },
  };

  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.title}>About Us</h2>
      <p style={styles.content}>
        We are a leading company in our industry, committed to providing top-notch services to our clients.
      </p>
    </section>
  );
}

export default About;
