import React, { useEffect, useState } from 'react'
import { Button, Card, Dropdown } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getAllToursAPI } from '../../services/allAPI'
import { Link } from 'react-router-dom'

const Tours = () => {
  const [searchKey, setSearchKey] = useState("")
  const [allTours, setAllTours] = useState([])
  const [sortedTours, setSortedTours] = useState([]);

  const [currentPage, setCurrentPage] = useState(1)
  const productPerPage = 6
  const totalPage = Math.ceil(allTours?.length / productPerPage)
  const currentPageLastProductIndex = currentPage * productPerPage
  const currentPageFirstProductIndex = currentPageLastProductIndex - productPerPage
  const visibleProductCards = allTours?.slice(currentPageFirstProductIndex, currentPageLastProductIndex)

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
  // console.log(allTours);

  const navigateToNextPage = () => {
    if (currentPage != totalPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  const navigateToPrevPage = () => {
    if (currentPage != 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const sortTours = (order) => {
    if(order === 'asc'){
      const lowToHigh = allTours.sort((a,b)=>a.price-b.price)
      setSortedTours(lowToHigh)
      setSortedTours('')
    }else{
      const highToLow = allTours.sort((a,b)=>b.price-a.price)
      setSortedTours(highToLow)
    }
  }
// console.log(sortedTours);

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
            <Dropdown>
              <Dropdown.Toggle variant="warning border rounded" id="dropdown-basic">
                Sort by Price
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={()=>sortTours('asc')}>Low to High</Dropdown.Item>
                <Dropdown.Item onClick={()=>sortTours('dec')}>High to Low</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className='d-flex align-items-center'>
              <input onChange={e => setSearchKey(e.target.value)} type="text" placeholder='Search by Country' className='form-control rounded-pill me-2' />
              <button className='btn bg-warning rounded text-light'><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
          </div>
          <div className="row row-gap-5">
            {
              allTours?.length > 0 ?
                visibleProductCards?.map(tours => (
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
                :
                <div className="text-danger fw-bold text-center">No result found...</div>
            }
          </div>
        </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a onClick={navigateToPrevPage} class="page-link"  aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {
            currentPage == 1 ?
              <li class="page-item"><a class="page-link" >...</a></li>
              :
              <li class="page-item"><a class="page-link" >{currentPage - 1}</a></li>
          }
          <li class="page-item active"><a class="page-link" >{currentPage}</a></li>
          {
            currentPage == totalPage ?
              <li class="page-item"><a class="page-link" >...</a></li>
              :
              <li class="page-item"><a class="page-link" >{currentPage + 1}</a></li>

          }
          <li class="page-item">
            <a onClick={navigateToNextPage} class="page-link"  aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
      <Footer />
    </>
  )
}

export default Tours