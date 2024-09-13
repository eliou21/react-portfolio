import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message Sent!');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    return (
      <section id="contact" className="py-5 mt-5 custom-bg">
        <div className="container">
          <h1 className="text-center mb-4">Contact</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-row row">
              <div className="form-group col-md-6">
                <label htmlFor="name">Name</label>
                <input
                  type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="email">Email</label>
                <input
                  type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" required/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control" id="message" name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Message" required></textarea>
            </div>
            <div className="form-group text-right">
              <button type="submit" className="btn btn-contact">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    );
}

export default Contact;
