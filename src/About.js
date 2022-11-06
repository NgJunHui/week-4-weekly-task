import React from 'react'
import { Carousel, Container } from 'react-bootstrap';


const About = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item
                //   interval={2000}
                >
                    <img
                        className="d-block w-100 first-img"
                        src="https://images.unsplash.com/photo-1469155472021-fb3489e556fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="First slide"

                    />
                    <Carousel.Caption>
                        <h3 className='carousel-title'>Make a change.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item
                //   interval={2000}
                >
                    <img
                        className="d-block w-100 second-img"
                        src="https://images.unsplash.com/photo-1540848893531-5eece9a5fa64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 third-img"
                        src="https://images.unsplash.com/photo-1519766304817-4f37bda74a26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <Container>
                <div class="ratio ratio-16x9" id="video-container">
                    <iframe src="https://www.youtube.com/embed/hBmWhlD7W4E" title="YouTube video" allowfullscreen></iframe>
                </div>
            </Container>
            <p>Brought to you by</p>
        </>
    )
}

export default About

