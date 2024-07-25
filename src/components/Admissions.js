import React from 'react';
import './Admissions.css'; // Assuming you have a CSS file for styling
import Form from './Form';

const Admissions = () => {
    return (
        <div className="admissions-container">
            <h1 >Admissions</h1>
            
            <section className="admissions-process">
                <h2>Process</h2>
                <p>Admission forms are available for filling. Submit the completed form along with required documents at the school office.</p>
                
            </section>
            <section className="admissions-criteria">
                <h2>Criteria</h2>
                <p>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
            </section>
            
            <section className="important-dates">
                <h2>Important Dates</h2>
                <ul>
                    <li><strong>Admission Form Availability:</strong> March 1st</li>
                    <li><strong>Last Date for Submission:</strong> March 31st</li>
                    <li><strong>Entrance Test:</strong> April 15th</li>
                    <li><strong>Announcement of Results:</strong> April 30th</li>
                </ul>
                <Form />
            </section>
        </div>
    );
};

export default Admissions;
