import './App.css';
import './media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './about';
import Footer from './footer';
import Home from './home';
import Navbarr from './navbar';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
    <Navbarr />
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
    </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;



