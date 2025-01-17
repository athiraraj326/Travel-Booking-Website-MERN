import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <Col lg={2} className='bg-warning p-3 text-light'>
            <h3 className='fw-bold text-center'>Admin Panel</h3>
            <hr className='border-3 opacity-75' />
            <div className='ms-4 mt-4'>
                <p className=' text-light'><Link to={'/admin/dashboard'} className='text-decoration-none text-light'>Dashboard</Link></p>
                <p><Link to={'/admin/all-tours'} className='text-decoration-none text-light'>Packages</Link></p>
                <p><Link to={'/admin/all-users'} className='text-decoration-none text-light'>Travellers</Link></p>
                <p><Link to={'/admin/booking-history'} className='text-decoration-none text-light'>Booking History</Link></p>
            </div>
        </Col>
    )
}

export default SideBar