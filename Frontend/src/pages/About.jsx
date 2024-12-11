import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
    <Header/>
      <div>
        <img width={'100%'} height={'600px'} src="about-banner.jpg" alt="" />
        <div className='position-absolute top-0 w-100 text-center d-flex flex-column
              justify-content-center align-items-center' style={{ background: 'rgba(0, 0, 0, 0.4)', height: '600px' }}>
          <h1 className='text-light' style={{ fontSize: '80px' }}>About Us</h1>
        </div>
      </div>

      <Container style={{ paddingTop: '60px' }}>
        <Row>
          <Col>
            <div className="border shadow p-3">
              <div className='text-center fs-1 mb-3'><i class="fa-solid fa-bus text-warning"></i></div>
              <h4 className='fw-bold text-center'>Private Transport</h4>
              <p style={{ textAlign: 'center' }}>Far far away, behind the word mountains, far from the countries Vokalia.</p>
            </div>
          </Col>
          <Col>
            <div className="border shadow p-3">
              <div className='text-center fs-1 mb-3'><i class="fa-solid fa-earth-americas text-warning"></i></div>
              <h4 className='fw-bold text-center'>Diverse Destinations</h4>
              <p style={{ textAlign: 'center' }}>Far far away, behind the word mountains, far from the countries Vokalia.</p>
            </div>
          </Col>
          <Col>
            <div className="border shadow p-3">
              <div className='text-center fs-1 mb-3'><i class="fa-solid fa-hotel text-warning"></i></div>
              <h4 className='fw-bold text-center'>Great Hotels</h4>
              <p style={{ textAlign: 'center' }}>Far far away, behind the word mountains, far from the countries Vokalia.</p>
            </div>
          </Col>
          <Col>
            <div className="border shadow p-3">
              <div className='text-center fs-1 mb-3'><i class="fa-solid fa-user-clock text-warning"></i></div>
              <h4 className='fw-bold text-center'>Fast Booking</h4>
              <p style={{ textAlign: 'center' }}>Far far away, behind the word mountains, far from the countries Vokalia.</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container style={{ paddingTop: '100px' }}>
        <Row className='align-items-center'>
          <Col>
            <div className='border-start border-4 border-warning mb-4'>
              <h4 className='fw-bold ms-3 mb-3 text-warning'>About Us</h4>
            </div>
            <h2 className='mb-3'>Plan Your Trip with Us</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country she had a last view back on the skyline</p>
            <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia she had a last view back on the skyline of her hometown</p>
          </Col>
          <Col>
            <div className="border border-3 border-warning p-2 w-75 ms-5">
              <img width={'390px'} height={'450px'} src="about-image.jpg" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    <Footer/>
    </>
  )
}

export default About