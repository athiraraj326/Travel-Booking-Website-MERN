import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Auth from './pages/Auth'
import Tours from './pages/Tours'
import ContactUs from './pages/ContactUs'
import ViewTours from './pages/ViewTours'
import Booking from './pages/Booking'
import Dashboard from './pages/Dashboard'
import UserProfile from './pages/UserProfile'
import Thankyou from './pages/Thankyou'
import ViewAllTours from './pages/ViewAllTours'
import AllUsers from './pages/AllUsers'
import BookingHistory from './pages/BookingHistory'
import HomeSearch from './pages/HomeSearch'
import AllReviews from './pages/AllReviews'
import Messages from './pages/Messages'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/contactinfo' element={<ContactUs/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth insideRegister={true}/>}/>
        <Route path='/tour/:id/view' element={<ViewTours/>}/>
        <Route path='/tour/:id/booking' element={<Booking/>}/>
        <Route path='/profile' element={<UserProfile/>}/>
        <Route path='/booking-successfull' element={<Thankyou/>}/>
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
        <Route path='/admin/all-tours' element={<ViewAllTours/>}/>
        <Route path='/admin/all-users' element={<AllUsers/>}/>
        <Route path='/admin/booking-history' element={<BookingHistory/>}/>
        <Route path='/search-result/:location' element={<HomeSearch/>}/>
        <Route path='/admin/all-reviews' element={<AllReviews/>}/>
        <Route path='/admin/messages' element={<Messages/>}/>
      </Routes>
    </>
  )
}

export default App
