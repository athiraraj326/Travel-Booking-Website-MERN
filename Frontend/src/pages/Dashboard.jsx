import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Dashboard = () => {
  return (
    <>
      <Row className='m-0' style={{minHeight:'100vh'}}>
        <Col lg={2} className='bg-primary p-3 text-light'>
          <h3 className='fw-bold text-center'>Admin Panel</h3>
          <hr className='border-3 opacity-75'/>
          <p>Dashboard</p>
          <p>Add Tours</p>
          <h5></h5>
          <h5></h5>
        </Col>
        <Col lg={10} className='p-3'>
        <h1 className='fw-bold'>Dashboard</h1>
        </Col>
      </Row>
    </>
  )
}

export default Dashboard