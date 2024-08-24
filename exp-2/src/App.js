import React from 'react';
import UserProfile from './UserProfile';

function App() {
  const user = {
    name: 'Abishek Pranav S A',
    age: 20,
    location: 'India, Tamil Nadu',
    profilePicture: './Abi.jpg',
  };

  const styles = {
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: `url('./img1.jpeg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    container: {
      border: '1px solid yellow',
      borderRadius: '8px',
      padding: '16px',
      width: '300px',
      textAlign: 'center',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    image: {
      borderRadius: '50%',
      width: '150px',
      height: '150px',
      objectFit: 'cover',
    },
    name: {
      fontSize: '24px',
      margin: '16px 0 8px',
      color: 'black',
    },
    info: {
      fontSize: '24px', // Same font size as name
      margin: '4px 0',
      color: 'black', // Same color as name
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <img src={user.profilePicture} alt="Profile" style={styles.image} />
        <h1 style={styles.name}>{user.name}</h1>
        <p style={styles.info}>Age: {user.age}</p>
        <p style={styles.info}>Location: {user.location}</p>
      </div>
    </div>
  );
}

export default App;
