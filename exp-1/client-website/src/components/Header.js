import React from 'react';

function Header() {
  const styles = {
    header: {
      backgroundColor: '#333',
      color: '#fff',
      padding: '10px',
      textAlign: 'center',
    },
    nav: {
      marginTop: '10px',
    },
    navItem: {
      display: 'inline',
      marginRight: '15px',
      color: '#fff',
      textDecoration: 'none',
    },
  };

  return (
    <header style={styles.header}>
      <h1>My Client's Website</h1>
      <nav style={styles.nav}>
        <a href="#about" style={styles.navItem}>About</a>
        <a href="#services" style={styles.navItem}>Services</a>
        <a href="#contact" style={styles.navItem}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
