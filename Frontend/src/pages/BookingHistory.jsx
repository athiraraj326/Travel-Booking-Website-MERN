import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import { Col, Row } from 'react-bootstrap'
import { getAllBookedTourAPI } from '../../services/allAPI'

const BookingHistory = () => {
  const [allBookings, setAllBookings] = useState([])
  useEffect(() => {
    getAllBooking()
  }, [])

  const getAllBooking = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await getAllBookedTourAPI(reqHeader)
        console.log(result);
        if (result.status == 200) {
          setAllBookings(result.data)
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <>
      <Row className='m-0' style={{ minHeight: '100vh' }}>
        <SideBar />
        <Col lg={10} className='p-3'>
          <div className='container'>
            <h1 className='fw-bold'>Booking History</h1>
            <table className="table my-5">
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Duration</th>
                  <th>No. of Person</th>
                  <th>Payment Mode</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                {
                  allBookings?.map(item => (
                    <tr>
                      <td><img width={'50px'} height={'50px'} className='rounded me-2' src={item.image} alt="" /> {item.country}</td>
                      <td>{item.fullName}</td>
                      <td>{item.date}</td>
                      <td>{item.duration}</td>
                      <td>{item.person} adults</td>
                      <td>{item.paymentMode}</td>
                      <td>${item.price}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default BookingHistory