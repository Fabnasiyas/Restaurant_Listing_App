import logo from './logo.svg';
import { Link } from 'react-router-dom';
import Home from './Pages/HomePage.jsx';
import AddRestaurantPage from './Components/AddRestaurantForm.jsx';
import UpdateRestaurantPage from './Components/UpdateRestaurantForm.jsx'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addRestaurant' element={<AddRestaurantPage />} />
          <Route path ='/update/:id' element={< UpdateRestaurantPage/>} />
          
   </Routes>
   </Router>
   <ToastContainer />
    </>
  );
}

export default App;
