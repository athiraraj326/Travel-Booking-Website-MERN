import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import { Col, Row } from 'react-bootstrap'
import { getAllReviewAPI } from '../../services/allAPI'

const AllReviews = () => {
  const [allReviews, setAllReviews] = useState([])
  useEffect(() => {
    getAllReviews()
  }, [])

  const getAllReviews = async () => {
    try {
      const result = await getAllReviewAPI()
      if (result.status == 200) {
        setAllReviews(result.data)
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Row className='m-0' style={{ minHeight: '100vh' }}>
        <SideBar />
        <Col lg={10} className='p-3'>
          <div className='container'>
            <h1 className='fw-bold'>Tour Reviews</h1>
            <table className="table my-5">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tour Id</th>
                  <th>Name</th>
                  <th>Review</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {
                  allReviews?.length > 0 ?
                    allReviews?.map((review, index) => (
                      <tr key={review?._id}>
                        <td>{index+1}</td>
                        <td>{review?.tourId}</td>
                        <td>{review?.username}</td>
                        <td>{review?.reviewText}</td>
                        <td>{review?.rating} star</td>
                      </tr>
                    ))
                  :
                  <div className="text-danger">No Reviews...</div>
                }
              </tbody>
            </table>
          </div>
        </Col>
      </Row>

    </>
  )
}

export default AllReviews