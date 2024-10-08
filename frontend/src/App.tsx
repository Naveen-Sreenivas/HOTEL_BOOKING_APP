import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Register from './pages/Register';
import SigIn from './pages/SigIn';
import AddHotel from './pages/AddHotel';
import { useAppContext } from './contexts/AppContext';
import MyHotels from './pages/MyHotels';
import EditHotel from './pages/EditHotel';
import Search from './pages/Search';
import Detail from './pages/Detail';
import Booking from './pages/Booking';
import DefaultHome from './components/DefaultHome';
 
function App() {
const {isLoggedIn} = useAppContext();
  return (
    <Router>
      <Routes>
    
   <Route path='/' element={<Layout children ={<DefaultHome/>}/>}/>

     <Route path='/search' element={
<Layout>
  <Search/>
  </Layout>
     }/>

     <Route path='/details/:hotelId' element={
<Layout>
  <Detail/>
  </Layout>
     }/>
     <Route path="/register" element={<Layout children={<Register/>}/>}/>
     <Route path='/sign-in' element={<Layout children={<SigIn/>}/>}/>
     
     {
      isLoggedIn && (
        <>

        <Route path='/hotel/:hotelId/booking' element={
          <Layout>
            <Booking/>
          </Layout>
        }/>

        <Route path='/add-hotel' element={
          <Layout>
            <AddHotel/>
          </Layout>
        }/>

        <Route path='/edit-hotel/:hotelId' element={
          <Layout>
             <EditHotel/>
          </Layout>
        }/>
        <Route path='/my-hotels' element={
          <Layout>
            <MyHotels/>
          </Layout>
        }/>
        </>
      )

     }
      </Routes>
    </Router>
  )
}

export default App
