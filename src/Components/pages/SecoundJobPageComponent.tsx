import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const SecoundJobPageComponent = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/Second">Discord</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/First">First</Nav.Link>
            <Nav.Link href="/Second">Second</Nav.Link>
            <Nav.Link href="/Third">Second</Nav.Link>
            <Nav.Link href="/Fourth">Fourth</Nav.Link>
            <Nav.Link href="/Fifth">Fifth</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container>

      <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Why Work There">
      Dive into why you want to work there (culture, benefits, hybrid, location)
      </Tab>
      <Tab eventKey="profile" title="Job require">
      Does the job require the current stack that you know. Would you have learn new skills?
      </Tab>
      <Tab eventKey="longer-tab" title="Goals">
      What goals would you like to achieve in the hypothetical position?
      </Tab>
      <Tab eventKey="contact" title="Skillsets">
      Do you currently have the skillsets for the job?
      </Tab>
    </Tabs>

    </Container>
    </div>
  )
}

export default SecoundJobPageComponent
