import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Row, Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import Image from 'react-bootstrap/Image';



const HomePageComponent = () => {

  const navigate = useNavigate();

    const handlePageChange = () => {
        navigate('/');
        navigate('/First');
        navigate('/Second');
        navigate('/Third');
        navigate('/Fourth');
        navigate('/Fifth');

    }


  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/First">First</Nav.Link>
            <Nav.Link href="/Second">Second</Nav.Link>
            <Nav.Link href="/Third">Third</Nav.Link>
            <Nav.Link href="/Fourth">Fourth</Nav.Link>
            <Nav.Link href="/Fifth">Fifth</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    <Container>

    <Image src='../' thumbnail />
     
    </Container>
      
   </div>
  )
}

export default HomePageComponent
