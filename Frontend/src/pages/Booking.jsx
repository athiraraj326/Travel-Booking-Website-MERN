import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Booking = () => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: '100px' }} className='container'>
        <h1 className='text-center mb-4 text-warning'>Book Your Tour</h1>
        <div className='d-flex justify-content-center'>
          <div className="border rounded p-3 w-50">
            <div className='d-flex align-items-center'>
              <h5>Selected Package : </h5>
              <input className='form-control w-50 ms-3' type="text" placeholder='country name' disabled/>
            </div>
            <hr />
            <div className="row">
              <div className="col-6">
                <input type="text" placeholder='Full Name' className='form-control mb-2' />
                <input type="text" placeholder='Phone Number' className='form-control mb-2' />
                <input type="date" className='form-control mb-2' />
              </div>
              <div className="col-6">
                <input type="email" placeholder='Email' className='form-control mb-2' />
                <input type="text" placeholder='Address' className='form-control mb-2' />
                <input type="text" placeholder='No. of Person' className='form-control mb-2' />
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <p>$99 x 1 person</p>
              <p>$99</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Service Charge</p>
              <p>$10</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className='fw-bold'>Total :</h5>
              <h5 className='fw-bold text-danger'>$109</h5>
            </div>
            <div className="text-center mt-5">
              <button className="btn bg-warning rounded text-light">Proceed to Pay</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Booking
