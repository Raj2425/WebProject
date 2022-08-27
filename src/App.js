import logo from './logo.svg';
import './App.css';
import NavbarComponent from './NavbarComponent';
import CarouselComponent from './CarouselComponent';
import AboutUs from './AboutUs';
import HomePage from './HomePage';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavbarComponent/>
      
   
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        
        <Route path="/aboutus" element={<AboutUs/>} />
       
        
    
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
