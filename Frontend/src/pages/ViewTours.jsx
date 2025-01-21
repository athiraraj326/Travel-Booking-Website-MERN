import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import { getSingleTourAPI } from '../../services/allAPI'
import { Accordion } from 'react-bootstrap'
import Reviews from '../components/Reviews'

const ViewTours = () => {

  const [tours, setTours] = useState({})
  const [price, setPrice] = useState("")
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    getSingleTours()
  }, [])

  const getSingleTours = async () => {
    try {
      const result = await getSingleTourAPI(id)
      // console.log(result);
      if (result.status == 200) {
        setTours(result.data)
        setPrice(result.data.price)
      }
    } catch (err) {
      console.log(err);
    }
  }

  console.log(tours);

  const findTotalPrice = (value) => {
    // console.log(value);
    if (value > 0) {
      setPrice(tours.price * value)
    }
  }
  console.log(price);

  const proceedBooking = (id) => {
    if (sessionStorage.getItem("token")) {
      navigate(`/tour/${id}/booking`)
    } else {
      alert("Please Login to proceed Booking")
      navigate('/login')
    }
  }


  return (
    <>
      <Header />
      <div>
        <img width={'100%'} height={'600px'} src={tours.image} alt="" />
        <div className='position-absolute top-0 w-100  d-flex align-items-end' style={{ background: 'rgba(0, 0, 0, 0.6)', height: '600px' }}>
          <div className='ms-5 mb-5'>
            <h1 className='text-light' style={{ fontSize: '60px' }}>{tours.country}</h1>
            <h3 className='text-light'>{tours.place}</h3>
            <div className='border-start border-warning d-flex flex-column text-light ps-3 mt-5'>
              <h3>Duration</h3>
              <h1>{tours.duration}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-5 container-fluid">
        <div className="col-lg-9">
          <div className='container px-5'>
            <h3 className='fw-bolder mb-3'>Overview</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis recusandae eligendi est delectus rerum. Molestias necessitatibus assumenda excepturi, repellendus quod repellat amet accusantium quidem saepe fugit quo delectus accusamus magni. Quidem, dolorem explicabo. Laboriosam voluptate aperiam corrupti iste ea commodi eligendi rerum repudiandae est dolores. Eum eveniet, illo dolore laudantium corrupti reprehenderit. Ex consequuntur non eligendi culpa eaque labore tenetur repudiandae quasi vero nam optio minima impedit error illo consequatur, quod nobis voluptas amet.</p>
            <h3 className='fw-bolder mb-4'>Itinerary</h3>
            <Accordion defaultActiveKey="0" className='border-light'>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h5><span className='text-warning me-3'>Day 1:</span> Departure</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h5><span className='text-warning me-3'>Day 2:</span> Adventure Beggins</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h5><span className='text-warning me-3'>Day 3:</span> Historical Tour</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <h5><span className='text-warning me-3'>Day 4:</span> City Tour</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <h5><span className='text-warning me-3'>Day 5:</span> Return</h5>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Reviews tourId={id}/>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="d-flex flex-column border rounded p-4">
            <h1 className='mb-4 fw-bold'>${tours.price} <span className='fs-5'>/per person</span></h1>
            <input onChange={e => findTotalPrice(e.target.value)} type="number" className='form-control mb-4' placeholder='Number of Person' />
            <div className="d-flex justify-content-between mb-3">
              <h4>Total :</h4>
              <h3 className="text-danger fw-bold">${price}</h3>
            </div>
            <button onClick={()=>proceedBooking(tours._id)} className="btn rounded-pill bg-warning text-light w-100">Book Now</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ViewTours