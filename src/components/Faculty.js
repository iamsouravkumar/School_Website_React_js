import React from 'react';
import './Faculty.css'; // Custom styles if needed

const facultyMembers = [
    { name: 'John Doe', position: 'Principal', qualifications: 'M.Ed', experience: '20 years of experience in educational administration.' },
    { name: 'Jane Smith', position: 'Vice Principal', qualifications: 'M.Sc. in Physics', experience: '15 years of teaching experience.' },
    { name: 'Emily Johnson', position: 'English Teacher', qualifications: 'M.A. in English', experience: '10 years of teaching experience.' },
    { name: 'Michael Brown', position: 'Mathematics Teacher', qualifications: 'M.Sc. in Mathematics', experience: '8 years of teaching experience.' },
    { name: 'Sophia Davis', position: 'Science Teacher', qualifications: 'M.Sc. in Chemistry', experience: '12 years of teaching experience.' },
    { name: 'David Wilson', position: 'Computer Science Teacher', qualifications: 'B.Tech in Computer Science', experience: '5 years of teaching experience.' }
];

const Faculty = () => {
    return (
        <div className=" faculty-container mt-5">
            <h1 className="text-center mb-4">Our Faculty</h1>
            <div className="row">
                {facultyMembers.map((member, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">{member.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{member.position}</h6>
                                <p className="card-text">
                                    <strong>Qualifications:</strong> {member.qualifications}<br />
                                    <strong>Experience:</strong> {member.experience}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faculty;
