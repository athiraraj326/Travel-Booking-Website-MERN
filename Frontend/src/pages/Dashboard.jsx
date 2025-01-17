import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SideBar from '../components/SideBar'

const Dashboard = () => {
  return (
    <>
      <Row className='m-0' style={{minHeight:'100vh'}}>
        <SideBar/>
        <Col lg={10} className='p-3'>
        <h1 className='fw-bold'>Dashboard</h1>
        </Col>
      </Row>
    </>
  )
}

export default Dashboard