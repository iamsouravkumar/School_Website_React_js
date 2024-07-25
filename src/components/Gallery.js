import React from 'react';
import './Gallery.css'; // Custom styles if needed
import { Carousel } from 'react-bootstrap';

const Gallery = () => {
    return (
      <div className='gallery-container'>
         <h1 className="text-center mb-4">Gallery</h1>
        {/* photos Section */}
        <section id="carousel2" className="carousel-section my-2">
        <h2 className="section-title">Photos</h2>
          <Carousel interval={2000}>  {/* Set the interval to 2000ms (3 seconds) */}
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="https://images.unsplash.com/photo-1663247455965-b63fa4048b29?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="sports day"
              />
              <Carousel.Caption>
                <h3>Sports Day</h3>
                <p>Students participating in various sports events.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="https://plus.unsplash.com/premium_photo-1682124431132-76331d407d4d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="science exhibition"
              />
              <Carousel.Caption>
                <h3 style={{color:"black"}}>Science Exhibition</h3>
                <p style={{color:"black"}}>Students presenting their science projects.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="https://plus.unsplash.com/premium_photo-1661538054347-0b8b9cade91e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="cultural fest"
              />
              <Carousel.Caption>
                <h3 style={{color:"black"}}>Cultural Fest</h3>
                <p style={{color:"black"}}>Students performing in the cultural fest.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="https://plus.unsplash.com/premium_photo-1671070687944-30bbb45f40bd?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Classroom</h3>
                <p>A glimpse of our interactive classrooms.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="https://images.unsplash.com/photo-1540151812223-c30b3fab58e6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Library</h3>
                <p>Students reading and studying in the school library.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          
        </section>
            {/* Videos Section */}
            <section className='video-container'>
                <h2 className="section-title">Videos</h2>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="embed-responsive embed-responsive-16by9">
                            <video className="embed-responsive-item" controls>
                                <source src="https://cdn.pixabay.com/video/2024/03/15/204243-923909579_large.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="video-caption">Virtual tour of Springdale Public School.</div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="embed-responsive embed-responsive-16by9">
                            <video className="embed-responsive-item" controls>
                                <source src="https://videos.pexels.com/video-files/7664783/7664783-hd_1920_1080_25fps.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="video-caption">Highlights from the Annual Function 2023.</div>
                        </div>
                    </div>
                </div>
            </section>

            
        </div>
    );
};

export default Gallery;
