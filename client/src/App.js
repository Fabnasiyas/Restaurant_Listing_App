import logo from './logo.svg';
import { Link } from 'react-router-dom';
import Home from './Pages/HomePage.jsx';
import AddRestaurantPage from './Components/AddRestaurantForm.jsx';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addRestaurant' element={<AddRestaurantPage />} />
   </Routes>
   </Router>
    
    </>
  );
}

export default App;
