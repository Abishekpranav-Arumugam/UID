import React from 'react';

function Footer() {
  const styles = {
    footer: {
      backgroundColor: '#333',
      color: '#fff',
      textAlign: 'center',
      padding: '10px',
      position: 'fixed',
      left: '0',
      bottom: '0',
      width: '100%',
    },
  };

  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 My Client's Website. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
