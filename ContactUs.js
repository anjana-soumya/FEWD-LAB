import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_6k1efta',        // Replace with your EmailJS service ID
      'template_ouqd5kd',       // Replace with your EmailJS template ID
      formData,
      'XmLfEir4lPTMWWoem'         // Replace with your EmailJS public key
    )
    .then(() => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      setStatus('Failed to send message.');
      console.error('EmailJS Error:', err);
    });
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ display: 'block', width: '100%', margin: '10px 0' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ display: 'block', width: '100%', margin: '10px 0' }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          style={{ display: 'block', width: '100%', margin: '10px 0' }}
        />
        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default ContactUs;
