import React, { useState } from 'react'
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { addMessageAPI } from '../../services/allAPI'

const ContactUs = () => {

  const [contactDetails, setContactDetails] = useState({
    name: "", email: "", phone: "", location: "", message: ""
  })
  
  const [isNameInvalid, setIsNameInvalid] = useState(false)
  const [isEmailInvalid, setIsEmailInvalid] = useState(false)
  const [isPhoneNumberInvalid, setIsPhoneNumberInvalid] = useState(false)

  const userInputValidation = (inputTag) => {
    const { name, value } = inputTag

    if (name == "username") {
      setContactDetails({ ...contactDetails, name: value })
      !!value.match(/^[a-zA-Z ]*$/) ? setIsNameInvalid(false) : setIsNameInvalid(true)
    } else if (name == "email") {
      setContactDetails({ ...contactDetails, email: value })
      !!value.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/) ? setIsEmailInvalid(false) : setIsEmailInvalid(true)
    } else if (name == "phone") {
      setContactDetails({ ...contactDetails, phone: value })
      !!value.match(/^[0-9]{10}$/) ? setIsPhoneNumberInvalid(false) : setIsPhoneNumberInvalid(true)
    }
  }

  const handleMessageSubmit = async () => {
    const { name, email, phone, location, message } = contactDetails
    if (name && email && phone && location && message) {
      // alert("call api")
      try{
        const result = await addMessageAPI(contactDetails)
        console.log(result.data);
        if(result.status==200){
          alert("Your Message send successfully!!!")
          setContactDetails({name: "", email: "", phone: "", location: "", message: ""})
        }
        
      }catch(err){
        console.log(err);
      }
    } else {
      alert("Please fill the form completely...")
    }
  }

  return (
    <>
      <Header />
      <div>
        <img width={'100%'} height={'600px'} src="contact-banner.jpg" alt="" />
        <div className='position-absolute top-0 w-100 text-center d-flex flex-column
              justify-content-center align-items-center' style={{ background: 'rgba(0, 0, 0, 0.4)', height: '600px' }}>
          <h1 className='text-light' style={{ fontSize: '80px' }}>Contact Us</h1>
        </div>
      </div>


      <div style={{ paddingTop: '60px' }} className='container my-5'>
        <Row>
          <Col xs={12} md={8}>
            <div className='d-flex flex-column gap-4'>
              <Row className="g-2">
                <Col md>
                  <FloatingLabel controlId="floatingInputName" label="Full Name" className='border border-dark'>
                    <Form.Control name='username' value={contactDetails.name} onChange={e => userInputValidation(e.target)} type="text" placeholder="Full Name" />
                  </FloatingLabel>
                  {
                    isNameInvalid && <div className='mb-3 fw-bolder text-danger'>Please enter your full name</div>
                  }
                </Col>
                <Col md>
                  <FloatingLabel controlId="floatingInputEmail" label="Email address" className='border border-dark'>
                    <Form.Control name='email' value={contactDetails.email} onChange={e => userInputValidation(e.target)} type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                  {
                    isEmailInvalid && <div className='mb-3 fw-bolder text-danger'>Please enter a valid email address</div>
                  }
                </Col>
              </Row>

              <Row className="g-2">
                <Col md>
                  <FloatingLabel controlId="floatingInputPhone" label="Phone" className='border border-dark'>
                    <Form.Control name='phone' value={contactDetails.phone} onChange={e => userInputValidation(e.target)} type="text" placeholder="Phone" />
                  </FloatingLabel>
                  {
                    isPhoneNumberInvalid && <div className='mt-2 fw-bolder text-danger'>Please enter a valid phone number</div>
                  }
                </Col>
                <Col md>
                  <FloatingLabel controlId="floatingInputLocation" label="Location" className='border border-dark'>
                    <Form.Control value={contactDetails.location} onChange={e => setContactDetails({ ...contactDetails, location: e.target.value })} type="text" placeholder="Location" />
                  </FloatingLabel>
                </Col>
              </Row>

              <FloatingLabel controlId="floatingTextarea2" label="Message" className='border border-dark'>
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                  value={contactDetails.message}
                  onChange={e => setContactDetails({ ...contactDetails, message: e.target.value })}
                />
              </FloatingLabel>

              <button onClick={handleMessageSubmit} className='btn btn-warning w-25 rounded fw-bold'>SUBMIT</button>

            </div>
          </Col>
          <Col xs={6} md={4}>
            <div className="container d-flex flex-column gap-4">
              <div>
                <div className='border-start border-4 border-warning'>
                  <h4 className='fw-bold ms-3 mb-3'>WHY BOOK WITH US?</h4>
                </div>
                <ul >
                  <li>Best Price Guarantee</li>
                  <li>Customer care available 24/7</li>
                  <li>Free Travel Insureance</li>
                  <li>Hand-picked Tours & Activities</li>
                </ul>
              </div>

              <div>
                <div className='border-start border-4 border-warning'>
                  <h4 className='fw-bold ms-3 mb-3'>GET A QUESTION?</h4>
                </div>
                <p>Do not hesitage to give us a call. We are an expert team and we are happy to talk to you.</p>
                <p><i class="fa-solid fa-envelope"></i> <span className='ms-2'>travelhub@gmail.com</span></p>
                <p><i class="fa-solid fa-phone"></i> <span className='ms-2'>+123 456 7890</span></p>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div style={{ paddingTop: '40px' }} className='container my-5'>
        <Row>
          <Col xs={6} md={4}>
            <div className="container d-flex flex-column gap-4">
              <div className='mb-3'>
                <div className='border-start border-4 border-warning mb-4'>
                  <h4 className='fw-bold ms-3 mb-3'>INDIAN OFFICE</h4>
                </div>
                <p><i class="fa-solid fa-location-dot"></i> <span className='ms-2'>54, Beside Shoping Mall, Gujarat.</span></p>
                <p><i class="fa-solid fa-phone"></i> <span className='ms-2'>+123 456 7890</span></p>
                <p><i class="fa-solid fa-envelope"></i> <span className='ms-2'>travelhub@gmail.com</span></p>
              </div>

              <div className='mb-3'>
                <div className='border-start border-4 border-warning mb-4'>
                  <h4 className='fw-bold ms-3 mb-3'>USA OFFICE</h4>
                </div>
                <p><i class="fa-solid fa-location-dot"></i> <span className='ms-2'>888 S Greenville, TX 75081, United States.</span></p>
                <p><i class="fa-solid fa-phone"></i> <span className='ms-2'>+123 456 7890</span></p>
                <p><i class="fa-solid fa-envelope"></i> <span className='ms-2'>travelhub@gmail.com</span></p>
              </div>

              <div className='mb-3'>
                <div className='border-start border-4 border-warning mb-4'>
                  <h4 className='fw-bold ms-3 mb-3'>VICTORIA OFFICE</h4>
                </div>
                <p><i class="fa-solid fa-location-dot"></i> <span className='ms-2'>Main Street, Victoria 8007.</span></p>
                <p><i class="fa-solid fa-phone"></i> <span className='ms-2'>+123 456 7890</span></p>
                <p><i class="fa-solid fa-envelope"></i> <span className='ms-2'>travelhub@gmail.com</span></p>
              </div>

            </div>
          </Col>
          <Col xs={12} md={8}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1005978.1132118684!2d-95.24355212202549!3d34.08519337201426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1732809519525!5m2!1sen!2sin" width="800" height="600" allowFullFcreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  )
}

export default ContactUs