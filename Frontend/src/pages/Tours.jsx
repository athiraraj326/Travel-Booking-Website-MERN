import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getAllToursAPI } from '../../services/allAPI'
import { Link } from 'react-router-dom'

const Tours = () => {
  const [searchKey,setSearchKey] = useState("")
  const [allTours, setAllTours] = useState([])

  useEffect(() => {
    getAllTours()
  }, [searchKey])

  const getAllTours = async () => {
    try {
      const result = await getAllToursAPI(searchKey)
      if (result.status == 200) {
        setAllTours(result.data)
      }
    } catch (err) {
      console.log(err);
    }
  }
  console.log(allTours);


  return (

    <>
      <Header />
      <div>
        <img width={'100%'} height={'600px'} src="tour-banner.jpg" alt="" />
        <div className='position-absolute top-0 w-100 text-center d-flex flex-column
              justify-content-center align-items-center' style={{ background: 'rgba(0, 0, 0, 0.4)', height: '600px' }}>
          <h1 className='text-light' style={{ fontSize: '80px' }}>Destination List</h1>
        </div>
      </div>
      <div className='container my-5'>
        <div className="d-flex justify-content-between align-items-center mx-5 mb-5">
          <div className='d-flex align-items-center'>
            <h5 className='fw-bolder text-warning me-3'>Sort by :</h5>
            <select name="" id="" className='p-2'>
              <option selected disabled>Price</option>
              <option value="Low to High">Low to High</option>
              <option value="High to Low">High to Low</option>
            </select>
          </div>
          <div className='d-flex align-items-center'>
            <input onChange={e=>setSearchKey(e.target.value)} type="text" placeholder='Search by Country' className='form-control rounded-pill me-2' />
            <button className='btn bg-warning rounded text-light'><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </div>
        <div className="row row-gap-5">
          {
            allTours?.map(tours => (
              <div className="col-lg-4">
                <Card style={{ width: '20rem' }}>
                  <Card.Img variant="top" src={tours.image} />
                  <Card.Body>
                    <Card.Title className='fw-bold border border-warning w-50 text-center p-2'>{tours.country}</Card.Title>
                    <Card.Text>
                      <p>Location : {tours.place}</p>
                      <h5> <i class="fa-solid fa-clock text-warning me-2"></i> {tours.duration}</h5>
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      <h4 className='fw-bolder'>$ {tours.price}</h4>
                      <Link to={`/tour/${tours._id}/view`}><Button variant="warning" className='rounded'>Book Now</Button></Link>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Tours