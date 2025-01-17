import React from 'react'
import SideBar from '../components/SideBar'
import { Col, Row } from 'react-bootstrap'

const BookingHistory = () => {
  return (
    <>
      <Row className='m-0' style={{minHeight:'100vh'}}>
        <SideBar/>
        <Col lg={10} className='p-3'>
        <div className='container'>
          <h1 className='fw-bold'>Booking History</h1>
          <table className="table my-5">
            <thead>
              <tr>
                <th>Country</th>
                <th>Date</th>
                <th>Duration</th>
                <th>No. of Person</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img width={'50px'} height={'50px'} className='rounded me-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQCpRKZNrYgJeEKQRET_7ybv6kgZdlm5dHtg&s" alt="" /> country</td>
                <td>22/12/2024</td>
                <td>5D/6N</td>
                <td>2 adults</td>
                <td>$600</td>
              </tr>
            </tbody>
          </table>
        </div>
        </Col>
      </Row>
    </>
  )
}

export default BookingHistory