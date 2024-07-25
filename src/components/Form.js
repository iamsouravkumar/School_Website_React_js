import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css'; // Custom styles if needed

const AdmissionForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gradeApplying: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        parentName: '',
        parentEmail: '',
        parentPhone: '',
        additionalInfo: ''
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
                toast.success('Admission form submitted successfully!', {
                    autoClose: 3000,
                  
                });
                setFormData({
                    firstName: '',
                    lastName: '',
                    dateOfBirth: '',
                    gradeApplying: '',
                    address: '',
                    city: '',
                    state: '',
                    zipCode: '',
                    parentName: '',
                    parentEmail: '',
                    parentPhone: '',
                    additionalInfo: ''
                });
            }, (error) => {
                toast.error('Failed to submit the form. Please try again.', {
                    autoClose: 3000,
                   
                });
            });
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Admission Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="firstName" 
                            name="firstName" 
                            placeholder="First Name" 
                            value={formData.firstName}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="lastName" 
                            name="lastName" 
                            placeholder="Last Name" 
                            value={formData.lastName}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <input 
                            type="date" 
                            className="form-control" 
                            id="dateOfBirth" 
                            name="dateOfBirth" 
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="gradeApplying">Grade Applying</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="gradeApplying" 
                            name="gradeApplying" 
                            placeholder="Grade Applying For" 
                            value={formData.gradeApplying}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="address" 
                        name="address" 
                        placeholder="1234 Main St" 
                        value={formData.address}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="city">City</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="city" 
                            name="city" 
                            value={formData.city}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="state">State</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="state" 
                            name="state" 
                            value={formData.state}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="zipCode">Zip Code</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="zipCode" 
                            name="zipCode" 
                            value={formData.zipCode}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="parentName">Parent/Guardian Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="parentName" 
                            name="parentName" 
                            placeholder="Parent/Guardian Name" 
                            value={formData.parentName}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="parentEmail">Parent/Guardian Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="parentEmail" 
                            name="parentEmail" 
                            placeholder="Parent/Guardian Email" 
                            value={formData.parentEmail}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="parentPhone">Parent/Guardian Phone</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="parentPhone" 
                        name="parentPhone" 
                        placeholder="Parent/Guardian Phone" 
                        value={formData.parentPhone}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="additionalInfo">Additional Information</label>
                    <textarea 
                        className="form-control" 
                        id="additionalInfo" 
                        name="additionalInfo" 
                        rows="3" 
                        value={formData.additionalInfo}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {/* Toast Container */}
            <ToastContainer />
        </div>
    );
};

export default AdmissionForm;
