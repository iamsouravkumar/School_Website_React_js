import React from 'react';
import './Students.css'; // Custom styles if needed

const Students = () => {
    return (
        <div className="student-container mt-5">
            <h1 className="text-center mb-4">Students</h1>
            {/* <h2 className="section-title">Life at SpringDale</h2> */}
            <section className="c-card mb-5">
                <h2 className="section-title">Extracurricular Activities</h2>
                <p className="activities-list">
                    Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club
                </p>
            </section>
            
            <section className="c-card mb-5">
                <h2 className="section-title">Clubs and Societies</h2>
                <p className="activities-list">
                    Literary Society, Environmental Club, Astronomy Club, Coding Club
                </p>
            </section>
            
            <section className="c-card mb-5">
                <h2 className="section-title">Achievements</h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm hover-effect">
                            <div className="card-body">
                                <h5 className="card-title">John Smith</h5>
                                <p className="card-text">National Level Math Olympiad Winner</p>
                            </div>
                        </div>
                    </div>
                    <div className="c-card col-md-4 mb-4">
                        <div className="card shadow-sm hover-effect">
                            <div className="card-body">
                                <h5 className="card-title">Sarah Lee</h5>
                                <p className="card-text">Gold Medalist in State Swimming Championship</p>
                            </div>
                        </div>
                    </div>
                    <div className="c-card col-md-4 mb-4">
                        <div className="card shadow-sm hover-effect">
                            <div className="card-body">
                                <h5 className="card-title">Tech Innovators Club</h5>
                                <p className="card-text">Winners of Inter-School Robotics Competition</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section>
                <h2 className=" c-card section-title">Student Council</h2>
                <div className=" c-card row">
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm hover-effect">
                            <div className="card-body">
                                <h5 className="card-title">President</h5>
                                <p className="card-text">Amy Parker, Grade 12</p>
                            </div>
                        </div>
                    </div>
                    <div className="c-card col-md-4 mb-4">
                        <div className="card shadow-sm hover-effect">
                            <div className="card-body">
                                <h5 className="card-title">Vice President</h5>
                                <p className="card-text">Rajiv Mehta, Grade 11</p>
                            </div>
                        </div>
                    </div>
                    <div className="c-card col-md-4 mb-4">
                        <div className="card shadow-sm hover-effect">
                            <div className="card-body">
                                <h5 className="card-title">Secretary</h5>
                                <p className="card-text">Lisa Wong, Grade 10</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Students;