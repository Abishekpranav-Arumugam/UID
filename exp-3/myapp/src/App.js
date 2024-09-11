import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    dob: '',
    areaOfInterest: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? '' : 'Name is required.';
    tempErrors.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email) ? '' : 'Email is not valid.';
    tempErrors.phone = formData.phone.length === 10 ? '' : 'Phone number must be 10 digits.';
    tempErrors.address = formData.address ? '' : 'Address is required.';
    tempErrors.dob = formData.dob ? '' : 'Date of birth is required.';
    tempErrors.areaOfInterest = formData.areaOfInterest ? '' : 'Area of interest is required.';

    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post('http://localhost:5000/api/saveFormData', formData);
        alert('Form submitted successfully');
      } catch (error) {
        console.error('Error saving form data:', error);
      }
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
          <div style={{ color: 'red' }}>{errors.name}</div>
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          <div style={{ color: 'red' }}>{errors.email}</div>
        </div>

        <div>
          <label>Phone no:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
          />
          <div style={{ color: 'red' }}>{errors.phone}</div>
        </div>

        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            style={styles.input}
          />
          <div style={{ color: 'red' }}>{errors.address}</div>
        </div>

        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            style={styles.input}
          />
          <div style={{ color: 'red' }}>{errors.dob}</div>
        </div>

        <div>
          <label>Area of Interest:</label>
          <input
            type="text"
            name="areaOfInterest"
            value={formData.areaOfInterest}
            onChange={handleChange}
            style={styles.input}
          />
          <div style={{ color: 'red' }}>{errors.areaOfInterest}</div>
        </div>

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full height viewport
    backgroundColor: '#f0f0f0',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  input: {
    marginBottom: '10px',
    padding: '8px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  }
};

export default UserForm;
