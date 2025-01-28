import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import SideBar from '../components/SideBar'
import { getAllUsersAPI } from '../../services/allAPI'

const AllUsers = () => {

  const [allUsers, setAllUsers] = useState([])
  useEffect(() => {
    getAllUsers()
  }, [])
  console.log(allUsers);

  const getAllUsers = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await getAllUsersAPI(reqHeader)
        setAllUsers(result.data)
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
          <div className='container'>
            <h1 className='fw-bold'>Travellers</h1>
            <table className="table my-5">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact Info</th>
                </tr>
              </thead>
              <tbody>
                {
                  allUsers?.map((user, index) => (
                    <tr key={user?._id}>
                      <td>{index + 1}</td>
                      <td>{user?.username}</td>
                      <td>{user?.email}</td>
                      {
                        user?.mobile ?
                          <td>{user.mobile}</td>
                          :
                          <td>No Info</td>
                      }
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default AllUsers