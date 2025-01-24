import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EditProfile from '../components/EditProfile'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getUserBookedTourAPI } from '../../services/allAPI'

const UserProfile = () => {
  const [bookedTours,setBookedTours] = useState([])

  useEffect(()=>{
    getUserBookings()
  },[])

  const getUserBookings = async ()=>{
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await getUserBookedTourAPI(reqHeader)
        // console.log(result);
        if(result.status == 200){
          setBookedTours(result.data)
        }
      } catch(err){
        console.log(err);
      }
    }
  }

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
          {
            bookedTours?.length>0 ?
            bookedTours?.map(tour=>(
              <div className="col-lg-3">
            <Card style={{ width: '16rem' }}>
              <Card.Img variant="top" src={tour.image} />
              <Card.Body>
                <div className='d-flex justify-content-between'>
                  <Card.Title><h4 className='fw-bold'>{tour.country}</h4>
                  <p style={{fontSize:'18px'}}>{tour.place}</p>
                  </Card.Title>
                  <Card.Text>
                    <h5 className='text-warning'>{tour.duration}</h5>
                  </Card.Text>
                </div>
                  <div className='text-center'><Link to={`/tour/${tour.countryId}/view`}><Button variant="warning" className='rounded'>View tour</Button></Link>
                </div>
              </Card.Body>
            </Card>
          </div>
            ))
          :
          <div className="text-danger fw-bolder">No Bookings...</div>
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default UserProfile