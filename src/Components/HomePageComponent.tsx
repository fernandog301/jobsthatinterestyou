import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Row, Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import Image from 'react-bootstrap/Image';
import Discord from './assets/Discord-logo.png';
import Netflix from './assets/netflixn.webp';
import NonProfit from './assets/non-profit-logo-vector-28458701.jpg';
import Instagram from './assets/instagram_PNG10.png';
import SuperCell from './assets/image.webp';

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
          <Nav.Link href="/First">Netflix</Nav.Link>
            <Nav.Link href="/Second">Discord</Nav.Link>
            <Nav.Link href="/Third">Non profit organization</Nav.Link>
            <Nav.Link href="/Fourth">SUPERCELL</Nav.Link>
            <Nav.Link href="/Fifth">Instagram</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    <Container>
    <Row>
        <Col xs={6} md={4}>
    <Image src={Discord} thumbnail />
    </Col>
    <Col xs={6} md={4}>
    <Image src={Netflix} thumbnail /></Col>
    <Col xs={6} md={4}>
    <Image src={NonProfit} thumbnail /></Col>
    <Col xs={6} md={4}>
    <Image src={Instagram} thumbnail /></Col>
    <Col xs={6} md={4}>
    <Image src={SuperCell} thumbnail /></Col>
    </Row>
    </Container>
      
   </div>
  )
}

export default HomePageComponent
