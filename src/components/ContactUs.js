import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications
import './ContactUs.css'; // Custom styles if needed

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('iamsourav', 'template_email', e.target, 'D2RcYQlTjBavPsi7G')
            .then((result) => {
                toast.success('Message sent successfully!', {
                    autoClose: 3000, // Timeout in milliseconds
                });
                setFormData({ name: '', email: '', message: '' });
            }, (error) => {
                toast.error('Failed to send message. Please try again.',{
                    autoClose: 3000, // Timeout in milliseconds

                });
            });
    };

    return (
        <div className="contact-container mt-5">
            <h1 className="text-center mb-4">Contact Us</h1>
            <div className="row">
                {/* Address Section */}
                <div className="col-md-6 mb-4">
                    <div className="address-card p-4 border shadow-sm">
                        <h2 className="h4">Our Address</h2>
                        <p>
                            Springdale Public School,<br />
                            123 Education Lane,<br />
                            Cityville, State, ZIP Code
                        </p>
                        <p>
                            <strong>Phone:</strong> +1 (123) 456-7890<br />
                            <strong>Email:</strong> <a href="mailto:info@springdale.edu">info@springdale.edu</a>
                        </p>
                        <div className="map-embed">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12688.527691090048!2d-74.00594129999999!3d40.71277569999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a17ef15a305%3A0xd5f6bfcfa058b2d!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1635429327597!5m2!1sen!2sus"
                                title="frame"
                                width="100%" 
                                height="300" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </div>
                
                {/* Contact Form Section */}
                <div className="col-md-6 mb-4">
                    <div className="contact-form p-4 border shadow-sm">
                        <h2 className="h4">Contact Form</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="name" 
                                    name="name" 
                                    placeholder="Your Name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="email" 
                                    name="email" 
                                    placeholder="Your Email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea 
                                    className="form-control" 
                                    id="message" 
                                    name="message" 
                                    rows="4" 
                                    placeholder="Your Message" 
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            {/* Toast Container */}
            <ToastContainer />
        </div>
    );
};

export default ContactUs;
