'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Something went wrong.');
      }
    } catch (err) {
      setStatus('Error sending message.');
    }
  };

  return (
    <form action="{handleSubmit}" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
          <div className="row gy-4">
            <div className="col-md-6">
              <label htmlFor="name-field" className="pb-2">Your Name</label>
              <input type="text" name="name" id="name-field" className="form-control" required />
            </div>

            <div className="col-md-6">
              <label htmlFor="email-field" className="pb-2">Your Email</label>
              <input type="email" className="form-control" name="email" id="email-field" required />
            </div>

            <div className="col-md-12">
              <label htmlFor="subject-field" className="pb-2">Subject</label>
              <input type="text" className="form-control" name="subject" id="subject-field" required />
            </div>

            <div className="col-md-12">
              <label htmlFor="message-field" className="pb-2">Message</label>
              <textarea className="form-control" name="message" rows="10" id="message-field" required></textarea>
            </div>

            <div className="col-md-12 text-center">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
              <button type="submit">Send Message</button>
            </div>
          </div>
        </form>
  );
}
