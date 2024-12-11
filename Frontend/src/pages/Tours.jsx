import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Tours = () => {
  return (
    <>
    <Header/>
      <div>
        <img width={'100%'} height={'600px'} src="tour-banner.jpg" alt="" />
        <div className='position-absolute top-0 w-100 text-center d-flex flex-column
              justify-content-center align-items-center' style={{ background: 'rgba(0, 0, 0, 0.4)', height: '600px' }}>
          <h1 className='text-light' style={{ fontSize: '80px' }}>Destination List</h1>
        </div>
      </div>
      <div className='container my-5'>
        <div className="row">
          <div className="col-lg-8">
            <div className="row row-gap-5">
              <div className="col-lg-6">
                <Card style={{ width: '20rem' }}>
                  <Card.Img variant="top" src="italy.jpg" />
                  <Card.Body>
                    <Card.Title className='fw-bold bg-warning w-25 text-center text-light p-2'>ITALY</Card.Title>
                    <Card.Text>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                      <h5> <i class="fa-solid fa-clock text-warning me-2"></i> Duration</h5>
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className='fw-bolder'>$ price</h5>
                      <Button variant="warning" className='rounded'>Book Now</Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>

              <div className="col-lg-6">
                <Card style={{ width: '20rem' }}>
                  <Card.Img variant="top" src="italy.jpg" />
                  <Card.Body>
                    <Card.Title className='fw-bold bg-warning w-25 text-center text-light p-2'>ITALY</Card.Title>
                    <Card.Text>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                      <h5> <i class="fa-solid fa-clock text-warning me-2"></i> Duration</h5>
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className='fw-bolder'>$ price</h5>
                      <Button variant="warning" className='rounded'>Book Now</Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>

              <div className="col-lg-6">
                <Card style={{ width: '20rem' }}>
                  <Card.Img variant="top" src="italy.jpg" />
                  <Card.Body>
                    <Card.Title className='fw-bold bg-warning w-25 text-center text-light p-2'>ITALY</Card.Title>
                    <Card.Text>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                      <h5> <i class="fa-solid fa-clock text-warning me-2"></i> Duration</h5>
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className='fw-bolder'>$ price</h5>
                      <Button variant="warning" className='rounded'>Book Now</Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            {/* booking */}
          </div>
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default Tours