import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { FiShoppingBag } from "react-icons/fi";




function navbar(props){
 return(
    <>
    {['xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary">
          <Container className='w-75 p-3'>
            <Navbar.Brand href="#"> <img src={require('./image/rajodiya-logo.png')} height={45} alt='' /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3 me-4 fw-medium">
                  <Nav.Link href="/" className='ms-3 text-secondary'>Home</Nav.Link>
                  <Nav.Link href="/about" className='ms-3 text-secondary'>About</Nav.Link>
                  <Nav.Link href="#action2" className='ms-3 text-secondary'>Service</Nav.Link>
                  <Nav.Link href="#action2" className='ms-3 text-secondary'>Capabilities</Nav.Link>
                  <Nav.Link href="#action2" className='ms-3 text-secondary'>Contact</Nav.Link>
                </Nav>
                <Button className="ps-4 pe-4  fw-medium"><FiShoppingBag></FiShoppingBag>&nbsp;&nbsp;Store</Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
 )
}

export default navbar;
