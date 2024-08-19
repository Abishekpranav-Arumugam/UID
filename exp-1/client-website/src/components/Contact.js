import React from 'react';

function Contact() {
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
    form: {
      display: 'inline-block',
      textAlign: 'left',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontSize: '18px',
    },
    input: {
      width: '100%',
      padding: '8px',
      marginBottom: '10px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      fontSize: '16px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#333',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
    },
  };

  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.title}>Contact Us</h2>
      <form style={styles.form}>
        <label style={styles.label}>Name:</label>
        <input type="text" style={styles.input} />
        <label style={styles.label}>Email:</label>
        <input type="email" style={styles.input} />
        <label style={styles.label}>Message:</label>
        <textarea style={styles.input} rows="5"></textarea>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </section>
  );
}

export default Contact;
