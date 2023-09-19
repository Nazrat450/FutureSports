import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    Fname: '',
    Lname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data Submitted', formData);
  };

  return (
    <div className="registration-container">
      <h2>Register For Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Fname">First Name:</label>
        <input type="text" id="Fname" name="Fname" required onChange={handleChange} />
        <br />
        <label htmlFor="Lname">Last Name:</label>
        <input type="text" id="Lname" name="Lname" required onChange={handleChange} />
        <br />
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required onChange={handleChange} />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required onChange={handleChange} />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required onChange={handleChange} />
        <br />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required onChange={handleChange} />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;