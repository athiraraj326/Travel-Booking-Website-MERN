import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import { Card, Col, Row } from 'react-bootstrap'
import { deleteTourAPI, getAllToursAPI } from '../../services/allAPI'
import Add from '../components/Add'
import Edit from '../components/Edit'

const ViewAllTours = () => {

  const [searchKey, setSearchKey] = useState("")
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

  const handleRemoveTour = async (id) => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        await deleteTourAPI(id, reqHeader)
        getAllTours()
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <>
      <Row className='m-0' style={{ minHeight: '100vh' }}>
        <SideBar />
        <Col lg={10} className='p-3'>
          <h1 className='fw-bold'>Tour Packages</h1>
          <div className='d-flex justify-content-between mt-4'>
            <Add />
            <input onChange={e => setSearchKey(e.target.value)} type="text" placeholder='Search by Country' className='form-control rounded-pill me-2 w-25' />
          </div>
          <Row>
            {
              allTours?.length > 0 ?
                allTours?.map(tour => (
                  <Col lg={3} md={4}>
                    <Card style={{ width: '15rem' }} className='my-3 rounded'>
                      <Card.Img variant="top" className='rounded-top' src={tour.image} />
                      <Card.Body>
                        <Card.Title className='fw-bolder fs-3'>{tour.country}</Card.Title>
                        <h5>{tour.place}</h5>
                        <div className="d-flex justify-content-between">
                          <h5 className='text-warning fw-bolder'>${tour.price}</h5>
                          <h5>{tour.duration}</h5>
                        </div>
                        <div className='text-center mt-2'>
                          <Edit tour={tour} />
                          <button onClick={() => handleRemoveTour(tour._id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
                :
                <div className="text-danger fw-bold text-center mt-5">No result found...</div>
            }
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default ViewAllTours