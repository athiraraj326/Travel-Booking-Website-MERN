import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import { addBookingAPI, getBookingTourAPI, orderAPI, validatePaymentAPI } from '../../services/allAPI'

const Booking = () => {
  const navigate = useNavigate()
  const [tourDetails,setTourDetails] = useState({})
  const [bookingDetails, setBookingDetails] = useState({
   fullName: "", email: "", phNumber: "", address: "", date: "", person: "", paymentMode: "", price:""
  })
  // console.log(bookingDetails);  
  
  const { id } = useParams()

  useEffect(()=>{
    getBookingTour()
  },[bookingDetails.person])

  const tourPrice = tourDetails.price * bookingDetails.person 

    const [isNameInvalid, setIsNameInvalid] = useState(false)
    const [isEmailInvalid, setIsEmailInvalid] = useState(false)
    const [isPhoneNumberInvalid, setIsPhoneNumberInvalid] = useState(false)
    const [isPersonInvalid, setIsPersonInvalid] = useState(false)
  
    const userInputValidation = (inputTag) => {
      const { name, value } = inputTag
      if (name == "username") {
        setBookingDetails({ ...bookingDetails, fullName: value })
        !!value.match(/^[a-zA-Z ]*$/) ? setIsNameInvalid(false) : setIsNameInvalid(true)
      } else if (name == "email") {
        setBookingDetails({ ...bookingDetails, email: value })
        !!value.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/) ? setIsEmailInvalid(false) : setIsEmailInvalid(true)
      } else if (name == "phone") {
        setBookingDetails({ ...bookingDetails, phNumber: value })
        !!value.match(/^[0-9]{10}$/) ? setIsPhoneNumberInvalid(false) : setIsPhoneNumberInvalid(true)
      } else if (name == "person") {
        setBookingDetails({ ...bookingDetails, person: value })
        !!value.match(/^[1-9]*$/) ? setIsPersonInvalid(false) : setIsPersonInvalid(true)
      } 
    }

  const getBookingTour = async () => {
      try {
        const result = await getBookingTourAPI(id)
        if (result.status == 200) {
          // console.log(result);
          setTourDetails(result.data)
          setBookingDetails({...bookingDetails,country:result.data.country})
        }
        if(bookingDetails.person>=1){
          setBookingDetails({...bookingDetails,price:(result.data.price * bookingDetails.person) + 10})
        }else{
          setBookingDetails({...bookingDetails,price:Number(result.data.price) + 10})
        }
      } catch (err) {
        console.log(err);
      }
    } 

  const handlePayment = async () => {
    const { country,fullName, email, phNumber, address, date, person, paymentMode,price } = bookingDetails
    const token = sessionStorage.getItem("token")
    const amount = bookingDetails.price
    const currency = "INR"
    const paymentDetails = {
      amount,
      currency,
      "receipt": "receiptId"
    }
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      if (fullName && email && phNumber && address && date && person && paymentMode) {
        try{
          const result = await addBookingAPI(bookingDetails,reqHeader,id)          
          console.log(result);
          if (paymentMode === "Online Payment") {
            // alert("Proceed payment")
            const order = await orderAPI(paymentDetails,reqHeader)
            console.log(order);
            
            var options = {
              "key": "rzp_test_T8LVjDJ5jPTqXf", // Enter the Key ID generated from the Dashboard
              amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
              currency,
              "name": "Travelhub", //your business name
              "description": "Test Transaction",
              "image": "https://example.com/your_logo",
              "order_id": order.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
              "handler": async function (response){ 
                const body ={...response}
                const validResponse = await validatePaymentAPI(body)
                // console.log(validResponse);
                if(validResponse.status==200){
                  alert("Payment is successfull")
                  navigate('/booking-successfull')
                }
                
              },
              "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                  "name": bookingDetails.fullName, //your customer's name
                  "email": bookingDetails.email, 
                  "contact": bookingDetails.phNumber  //Provide the customer's phone number for better conversion rates 
              },
              "notes": {
                  "address": "Razorpay Corporate Office"
              },
              "theme": {
                  "color": "#e89712"
              }
          };
          var rzp1 = new Razorpay(options);
          rzp1.on('payment.failed', function (response){
                  alert(response.error.code);
                  alert(response.error.description);
                  alert(response.error.source);
                  alert(response.error.step);
                  alert(response.error.reason);
                  alert(response.error.metadata.order_id);
                  alert(response.error.metadata.payment_id);
          });
          rzp1.open();
          e.preventDefault();
  
          } else {
            navigate('/booking-successfull')
          }
        } catch(err){
          console.log(err);
        }
        
      } else {
        alert("Please fill the form completely")
      }
    }
  }
  return (
    <>
      <Header />
      <div style={{ paddingTop: '100px' }} className='container'>
        <h1 className='text-center my-4 text-warning'>Book Your Tour</h1>
        <div className='container my-5 py-5'>
          <div className='row'>
            <div className='col-lg-5'>
              <div className='d-flex align-items-center'>
                <h5>Selected Package : </h5>
                <h5 className='text-warning ms-2'>{tourDetails.country}</h5>
              </div>
              <hr />
              <div className="row">
                <div className="col-6">
                  <input name='username' value={bookingDetails.fullName} onChange={e => userInputValidation(e.target)} type="text"
                   placeholder='Full Name' className='form-control mb-2' />
                   {
                    isNameInvalid && <div className='mb-3 fw-bolder text-danger'>Please enter full name</div>
                  }
                  <input name='phone' value={bookingDetails.phNumber} onChange={e => userInputValidation(e.target)} type="text" placeholder='Phone Number' className='form-control mb-2' />
                  {
                    isPhoneNumberInvalid && <div className='mb-3 fw-bolder text-danger'>Please enter a valid number</div>
                  }
                  <input onChange={e => setBookingDetails({ ...bookingDetails, date: e.target.value })} type="date" className='form-control mb-2' />
                </div>
                <div className="col-6">
                  <input name='email' value={bookingDetails.email} onChange={e => userInputValidation(e.target)} type="email" placeholder='Email' className='form-control mb-2' />
                  {
                    isEmailInvalid && <div className='mb-3 fw-bolder text-danger'>Please enter valid email</div>
                  }
                  <input onChange={e => setBookingDetails({ ...bookingDetails, address: e.target.value })} type="text" placeholder='Address' className='form-control mb-2' />
                  <input name='person' value={bookingDetails.person} onChange={e => userInputValidation(e.target)} type="text" placeholder='No. of Person' className='form-control mb-2' />
                  {
                    isPersonInvalid && <div className='mb-3 fw-bolder text-danger'>Please enter a valid number</div>
                  }
                </div>
              </div>
              <hr />
              <div className='d-flex gap-4'>
                <div class="form-check">
                  <input onChange={e => setBookingDetails({ ...bookingDetails, paymentMode: e.target.value })} value={'Direct Payment'} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label class="form-check-label" for="flexRadioDefault1">Direct Payment</label>
                </div>
                <div class="form-check">
                  <input onChange={e => setBookingDetails({ ...bookingDetails, paymentMode: e.target.value })} value={'Online Payment'} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label class="form-check-label" for="flexRadioDefault1">Online Payment</label>
                </div>
              </div>
            </div>
            <div className="col-lg-2"></div>
            <div className='col-lg-5'>
              <div className="d-flex justify-content-between">
                <p>${tourDetails.price} x {bookingDetails.person>=1? bookingDetails.person :1} person</p>
                <p>${bookingDetails.person>=1? tourPrice : tourDetails.price}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Service Charge</p>
                <p>$10</p>
              </div>
              <div className="d-flex justify-content-between">
                <h5 className='fw-bold'>Total :</h5>
                <h5 className='fw-bold text-danger'>${bookingDetails.price}</h5>
              </div>
              <div className="text-center mt-5">
                <button onClick={handlePayment} className="btn bg-warning rounded text-light">Proceed to Pay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Booking
