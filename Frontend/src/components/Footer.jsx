import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/logo.png'

const Footer = () => {
  return (
    <>
      <div style={{ height: '600px'}} className='bg-dark mt-5 px-5 text-light'>
      <div className="d-flex justify-content-between border-bottom py-4">
        <div className="d-flex flex-column mt-3 w-25">
          <div className='d-flex mb-4'>
            <img src={logoImg} width="45" height="45" alt="" />     
            <h2 className='text-warning ms-2'>Travel<span className='text-light fw-bold'>hub</span></h2>
          </div>         
          <p style={{fontSize:'18px'}}>Travelhub sit amet consectetur adipisicing elit. Perferendis sapiente tenetur officiis explicabo fugit, sit mollitia eum atque excepturi quaerat autem.</p>
          <div className="d-flex mt-3">
            <input type="text" className='form-control p-2 rounded-start' placeholder='Enter Your Email' />
            <button className='btn btn-warning rounded-end'>SUBMIT</button>
          </div>
        </div>
        <div className="d-flex flex-column mt-3 w-25">
          <h2 className='mb-4'>Navigation</h2>
          <div className='d-flex flex-column border-top pt-4 fs-5'>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}} className='mb-3'>Home</Link>
            <Link to={'/about'} style={{textDecoration:'none',color:'white'}} className='mb-3'>About</Link>
            <Link to={'/tours'} style={{textDecoration:'none',color:'white'}} className='mb-3'>Tours</Link>
            <Link to={'/contactinfo'} style={{textDecoration:'none',color:'white'}}>Contact Us</Link>
          </div>
        </div>
        <div className="mt-3 w-25">
          <h2 className='mb-4'>Contact Us</h2>
          <div className="border-top pt-4">
            <div className='border-start border-4 border-warning ps-4 mb-4'>
              <p>Call Us</p>
              <h5>+123 456 7890</h5>
            </div>
            <div className='border-start border-4 border-warning ps-4 mb-4'>
              <p>Email Us</p>
              <h5>travelhub@gmail.com</h5>
            </div>
            <div className='border-start border-4 border-warning ps-4 mb-4'>
              <p>Location</p>
              <h5>Main Street, Victoria 8007.</h5>
            </div>
          </div>
          <div className='border-start border-4 border-warning ps-4'>
            <p>Follow us</p>
            <div className="icons d-flex gap-4 mt-3">
              <Link style={{ textDecoration: 'none',color:'white'}} target='_blank'><i className="fa-brands fa-twitter"></i></Link>
              <Link style={{ textDecoration: 'none',color:'white'}} target='_blank'><i className="fa-brands fa-instagram"></i></Link>
              <Link style={{ textDecoration: 'none',color:'white'}} target='_blank'><i className="fa-brands fa-facebook"></i></Link>
              <Link style={{ textDecoration: 'none',color:'white'}} target='_blank'><i className="fa-brands fa-linkedin"></i></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-between pt-4'>
        <p>Copyright &copy; June 2024, Travel Website. Built with React</p>
        <p>Privacy Policy | Terms of Use | Cookie Policy</p>
      </div>
    </div>
    </>
  )
}

export default Footer