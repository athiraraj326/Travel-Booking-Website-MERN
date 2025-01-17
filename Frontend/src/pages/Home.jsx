import React, { useEffect, useState } from 'react'
import { Carousel, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Slider from "react-slick";
import { getHomeToursAPI } from '../../services/allAPI';

const Home = () => {

  const navigate = useNavigate()
  const [homeTours, setHomeTours] = useState([])
  const [searchContent,setSearchContent] = useState({
    location:"",month:""
  })

  useEffect(() => {
    getHomeTours()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };

  const getHomeTours = async () => {
    try {
      const result = await getHomeToursAPI()
      if (result.status == 200) {
        setHomeTours(result.data)
      }
    } catch (err) {
      console.log(err);
    }
  }
  // console.log(homeTours);

  const handleSearch = async ()=>{
    const {location,month} = searchContent
    if(location && month){
      navigate(`/search-result/${location}`)
    }else{
      alert("Please enter full details...")
    }
  }

  return (
    <>
      <Header />
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="banner-1.jpg"
            alt="First slide"
            height={'700px'}
          />
          <div className='position-absolute top-0 w-100 h-100 text-center d-flex flex-column
              justify-content-center align-items-center' style={{ background: 'rgba(0, 0, 0, 0.6)' }}>
            <h1 className='text-light' style={{ fontSize: '80px' }}>Enjoy The Travel With <br />Travelhub</h1>
            <Link to={'/tours'}><button className='btn btn-warning rounded fs-5 mt-3'>Explore More</button></Link>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="banner-2.jpg"
            alt="Second slide"
            height={'700px'}
          />
          <div className='position-absolute top-0 w-100 h-100 text-center d-flex flex-column
              justify-content-center align-items-center' style={{ background: 'rgba(0, 0, 0, 0.6)' }}>
            <h1 className='text-light' style={{ fontSize: '80px' }}>Life is Short and <br /> The World is Wide.</h1>
            <Link to={'/tours'}><button className='btn btn-warning rounded fs-5 mt-3'>Explore More</button></Link>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="banner-3.jpg"
            alt="Third slide"
            height={'700px'}
          />
          <div className='position-absolute top-0 w-100 h-100 text-center d-flex flex-column
              justify-content-center align-items-center' style={{ background: 'rgba(0, 0, 0, 0.6)' }}>
            <h1 className='text-light' style={{ fontSize: '80px' }}>Get Ready to Travel <br />The World.</h1>
            <Link to={'/tours'}><button className='btn btn-warning rounded fs-5 mt-3'>Explore More</button></Link>
          </div>
        </Carousel.Item>
      </Carousel>

      <div className='container'>
        <Row className="g-4 m-5 align-items-end">
          <Col md>
            <label className='fs-5 mb-2'><span className='text-warning me-1'><i class="fa-solid fa-location-dot"></i></span> Location</label>
            <FloatingLabel controlId="floatingInputGrid" label="Where To?">
              <Form.Control onChange={e=>setSearchContent({...searchContent,location:e.target.value})} type="text" placeholder="location" className='border-dark rounded' />
            </FloatingLabel>
          </Col>
          <Col md>
            <label className='fs-5 mb-2'><span className='text-warning me-1'><i class="fa-solid fa-calendar-days"></i></span> Month</label>
            <Form.Select onChange={e=>setSearchContent({...searchContent,month:e.target.value})} aria-label="Default select example" className='p-3 border-dark rounded'>
              <option>When?</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </Form.Select>
          </Col>
          <Col md>
            <button onClick={handleSearch} className='btn bg-warning rounded text-light px-3 fs-4 mb-1'>Search</button>
          </Col>
        </Row>
      </div>

      <div className="container">
        <div className='border-start border-4 border-warning'>
          <h3 className='text-warning ms-3'>Amazing Tours</h3>
        </div>
        <h1 className='mb-4'>Trending, Best Selling Tours And <br /> Fun Destinations</h1>
          <div className="slider-container">
            <Slider {...settings}>
              {
                homeTours?.map(tour => (
                  <div className='position-relative'>
                    <img width={'350px'} height={'400px'} src={tour.image} alt="" />
                    <div className='position-absolute bottom-0'>
                      <div className="d-flex justify-content-center align-items-center border border-3 border-warning bg-light mx-3 mb-2" style={{width:'320px'}}>
                        <h2 className='bg-light p-2'>{tour.country}</h2>
                        <h2 className='text-warning fw-bolder ms-5 p-2'>$ {tour.price}</h2>
                      </div>
                    </div>
                  </div>
                ))
              }
            </Slider>
          </div>
      </div>

      <div className='container mt-4'>
        <div className='border-start border-4 border-warning'>
          <h3 className='text-warning ms-3'>Instagram</h3>
        </div>
        <h1 className='mb-4'>Travelhub</h1>
        <div className='d-flex gap-4 my-5'>
          <img width={'170px'} height={'170px'} src="insta-1.jpg" alt="" />
          <img width={'170px'} height={'170px'} src="insta-2.jpg" alt="" />
          <img width={'170px'} height={'170px'} src="insta-3.jpg" alt="" />
          <img width={'170px'} height={'170px'} src="insta-4.jpg" alt="" />
          <img width={'170px'} height={'170px'} src="insta-5.jpg" alt="" />
          <img width={'170px'} height={'170px'} src="insta-6.jpg" alt="" />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home