import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Thankyou = () => {
    return (
        <>
            <Header />
            <div style={{ minHeight: '100vh' }} className='d-flex flex-column justify-content-center align-items-center'>
                <i class="fa-regular fa-circle-check text-success fs-2"></i>
                <h1 className='my-3 fw-bolder'>Thank You</h1>
                <h4>Your tour is booked.</h4>
                <Link to={'/'}><button className="btn rounded-pill bg-warning text-light mt-3">Back to Home</button></Link>
            </div>
            <Footer />
        </>
    )
}

export default Thankyou