import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Row, Col} from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Image from 'react-bootstrap/Image';
import Discord from '../assets/Discord-logo.png';

const SecoundJobPageComponent = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/Second">Discord</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
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
      <Col className='col-6'>
      <Image src={Discord} thumbnail />
      </Col>
      <Col className='col-6'>
      <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Why Work There">
      Dive into why you want to work there (culture, benefits, hybrid, location)
      <ul>
        <li>Culture: Discord is known for its inclusive and supportive culture, where employees are encouraged to express themselves freely and collaborate effectively. The company values diversity and inclusion, fostering an environment where individuals from different backgrounds can thrive.</li>
        <li>Benefits: Discord offers competitive benefits packages, including health insurance, retirement plans, and stock options. Additionally, the company provides perks such as flexible work hours, wellness programs, and opportunities for professional development.</li>
        <li>Location: Discord has offices in various locations worldwide, including San Francisco, New York, and London. Depending on the position, there may be opportunities to work from one of these office locations or remotely from anywhere with an internet connection.</li>
      </ul>
      </Tab>
      <Tab eventKey="profile" title="Job require">
      Does the job require the current stack that you know. Would you have learn new skills?
        <ul>
      <li>Required Skills: programming languages, web development frameworks, and software development tools. </li>
      </ul>
      </Tab>
      <Tab eventKey="longer-tab" title="Goals">
      What goals would you like to achieve in the hypothetical position?
      <ul>
        <li>
        I would strive to learn from experienced professionals, take on new challenges, and continuously improve my abilities.
        </li>
        </ul>
      </Tab>
      <Tab eventKey="contact" title="Skillsets">
      Do you currently have the skillsets for the job?
      <ul>
        <li>
        Discord values individuals who are eager to learn and adapt to new challenges, so demonstrating a willingness to grow and develop professionally is essential.
        </li>
      </ul>
      </Tab>
    </Tabs>
    </Col>
    </Row>
    </Container>
    </div>
  )
}

export default SecoundJobPageComponent
