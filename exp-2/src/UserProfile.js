import React from 'react';

const UserProfile = ({ name, age, location, profilePicture }) => {
  return (
    <div style={styles.container}>
      <img src={profilePicture} alt={`${name}'s profile`} style={styles.image} />
      <h1 style={styles.name}>{name}</h1>
      <p style={styles.info}>Age: {age}</p>
      <p style={styles.info}>Location: {location}</p>
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    width: '300px',
    textAlign: 'center',
  },
  image: {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
  },
  name: {
    fontSize: '24px',
    margin: '16px 0 8px',
    color: 'blue', // User prefers blue color
  },
  info: {
    fontSize: '18px',
    margin: '4px 0',
  },
};

export default UserProfile;
