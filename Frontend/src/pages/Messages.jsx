import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import { Col, Row } from 'react-bootstrap'
import { getAllMessageAPI } from '../../services/allAPI'

const Messages = () => {
  const [allMessages,setAllMessages] = useState([])
  useEffect(() => {
    getAllMessages()
    }, [])

  const getAllMessages = async ()=>{
    try{
      const result = await getAllMessageAPI()
      if (result.status == 200) {
        setAllMessages(result.data)
      }
    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
      <Row className='m-0' style={{ minHeight: '100vh' }}>
        <SideBar />
        <Col lg={10} className='p-3'>
          <div className='container'>
            <h1 className='fw-bold'>Messages</h1>
            <table className="table my-5">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact Info</th>
                  <th>Location</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {
                  allMessages?.length>0 ?
                  allMessages?.map((message,index)=>(
                    <tr key={message?._id}>
                      <td>{index+1}</td>
                      <td>{message?.name}</td>
                      <td>{message?.email}</td>
                      <td>{message?.phone}</td>
                      <td>{message?.location}</td>
                      <td>{message?.message}</td>
                    </tr>
                  ))
                  :
                  <div className="text-danger">No messages...</div>
                }
                  </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Messages