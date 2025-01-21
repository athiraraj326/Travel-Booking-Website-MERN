import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EditProfile from '../components/EditProfile'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserProfile = () => {
  return (
    <>
      <Header />
      <div>
        <img width={'100%'} height={'400px'} src="profile-banner.jpg" alt="" />
        <div className="position-absolute bottom-0" style={{ paddingBottom: '160px', paddingLeft: '50px' }}>
          <img className='border border-3 border-light rounded-circle' width={'180px'} height={'180px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0iyDV7yF0Up_AzCC5Iq84UuLsOwvER4YTg&s" alt="" />
        </div>
      </div>
      <div style={{ marginLeft: '250px', marginTop: '30px' }} className='w-25'>
        <div className='d-flex justify-content-between'>
          <h3 className='fw-bold'>Name</h3>
          <EditProfile />
        </div>
        email<br />
        mobile
      </div>
      <div className='container mt-5'>
        <h4 className='text-warning'>My Bookings</h4>
        <div className="row row-gap-3 mt-4">
          <div className="col-lg-3">
            <Card style={{ width: '16rem' }}>
              <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1661962958462-9e52fda9954d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGhhaWxhbmR8ZW58MHx8MHx8fDA%3D" />
              <Card.Body>
                <div className='d-flex justify-content-between'>
                  <Card.Title><h4 className='fw-bold'>Country</h4>
                  <h5>Location : </h5>
                  </Card.Title>
                  <Card.Text>
                    <h5 className='fw-bolder text-warning'>$ price</h5>
                    <h5>duration</h5>
                  </Card.Text>
                </div>
                  <div className='text-center'><Link to={`/tour/id/view`}><Button variant="warning" className='rounded'>View tour</Button></Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default UserProfile