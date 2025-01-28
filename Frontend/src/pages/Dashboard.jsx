import React, { useEffect, useState } from 'react'
import { Col, Dropdown, Row } from 'react-bootstrap'
import SideBar from '../components/SideBar'
import { getAllBookedTourAPI, getAllMessageAPI, getAllReviewAPI, getAllUsersAPI, getTourCountAPI } from '../../services/allAPI'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const [userCount, setUserCount] = useState("")
  const [bookingCount, setBookingCount] = useState("")
  const [tourCount, setTourCount] = useState("")
  const [reviewCount, setReviewCount] = useState("")
  const [messageCount, setMessageCount] = useState("")

  useEffect(() => {
    getUsersCount()
    getBookingCount()
    getTourCount()
    getReviewsCount()
    getMessageCount()
  }, [])

  const data = [
    { name: "Facebook", value: 225 },
    { name: "Insta", value: 200 },
    { name: "wtsapp", value: 250 },
    { name: "twitter", value: 150 }
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const getUsersCount = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await getAllUsersAPI(reqHeader)
        setUserCount(result.data.length)
      } catch (err) {
        console.log(err);
      }
    }
  }

  const getBookingCount = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await getAllBookedTourAPI(reqHeader)
        console.log(result);
        if (result.status == 200) {
          setBookingCount(result.data.length)
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  const getTourCount = async () => {
    try {
      const result = await getTourCountAPI()
      if (result.status == 200) {
        setTourCount(result.data.length)
      }
    } catch (err) {
      console.log(err);
    }
  }

  const getReviewsCount = async () => {
    try {
      const result = await getAllReviewAPI()
      if (result.status == 200) {
        setReviewCount(result.data.length)
      }
    } catch (err) {
      console.log(err);
    }
  }

  const getMessageCount = async () => {
    try {
      const result = await getAllMessageAPI()
      if (result.status == 200) {
        setMessageCount(result.data.length)
      }
    } catch (err) {
      console.log(err);
    }
  }

  const logout = () => {
    sessionStorage.clear()
    navigate('/')
  }

  return (
    <>
      <Row className='m-0' style={{ minHeight: '100vh' }}>
        <SideBar />
        <Col lg={10} className='p-0'>
          <div className="bg-secondary py-2 px-4 d-flex justify-content-between text-light">
            <h1 className='fw-bold'>Dashboard</h1>
            <Dropdown>
              <Dropdown.Toggle variant="border rounded text-light" id="dropdown-basic">
                <i className="fa-solid fa-user me-2"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={logout} >Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="d-flex justify-content-evenly my-5">
            <div className="rounded bg-info text-light p-3">
              <h3><i className="fa-solid fa-users me-2"></i> Travellers</h3>
              <h3 className="text-center">{userCount}</h3>
            </div>
            <div className="rounded bg-danger text-light p-3">
              <h3><i class="fa-solid fa-plane-departure me-2"></i> Bookings</h3>
              <h3 className="text-center">{bookingCount}</h3>
            </div>
            <div className="rounded bg-primary text-light p-3">
              <h3><i class="fa-solid fa-map-location-dot me-2"></i> Packages</h3>
              <h3 className="text-center">{tourCount}</h3>
            </div>
            <div className="rounded bg-success text-light p-3">
              <h3><i class="fa-solid fa-star-half-stroke me-2"></i> Reviews</h3>
              <h3 className="text-center">{reviewCount}</h3>
            </div>
            <div className="rounded bg-warning text-light p-3">
              <h3><i class="fa-solid fa-message me-2"></i> Messages</h3>
              <h3 className="text-center">{messageCount}</h3>
            </div>
          </div>

          <div className='d-flex justify-content-evenly mt-5'>
            <BarChart
              width={400}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barSize={20}
            >
              <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
            </BarChart>

            <PieChart width={300} height={300} >
              <Pie
                data={data}
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </div>

        </Col>
      </Row>
    </>
  )
}

export default Dashboard