import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Row, Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Instagram from '../assets/instagram_PNG10.png';

const FifthJobPageComponent = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/Fifth">Instagram</Navbar.Brand>
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
      <Image src={Instagram} thumbnail />
      

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
        <li>Culture: Instagram, as part of Meta (formerly Facebook), is known for its dynamic and innovative culture. The company values creativity, collaboration, and diversity, fostering an environment where employees are encouraged to express their ideas and contribute to impactful projects. The culture promotes a sense of belonging and inclusivity, with a focus on supporting employee well-being and professional growth.</li>
      <li>Benefits: Instagram offers competitive benefits packages, including health insurance, retirement plans, and stock options. Additionally, employees can enjoy perks such as flexible work arrangements, wellness programs, and opportunities for career development and advancement. The company also provides various amenities and resources to support employees' physical, mental, and financial well-being.</li>
      <li>
      Hybrid Work Model: Instagram, like many tech companies, offers a hybrid work model, allowing employees to work remotely or from the office. This flexibility enables individuals to balance work and personal life more effectively while still collaborating with colleagues and contributing to the company's goals.
      </li>
      <li>Location: Instagram's headquarters is located in Menlo Park, California, in the heart of Silicon Valley. Working at this location provides proximity to a vibrant tech ecosystem, networking opportunities, and access to world-class amenities and cultural attractions. Additionally, Instagram has offices in various other locations worldwide, offering diverse and inclusive work environments.</li>
      
      </ul>
      </Tab>
      <Tab eventKey="profile" title="Job require">
      Does the job require the current stack that you know. Would you have learn new skills?
      <li>Job Requirements: Job requirements at Instagram may vary depending on the specific role, but typical positions may require proficiency in programming languages, software development frameworks, and tools relevant to mobile app development and backend systems. Additionally, roles may require skills in areas such as product management, data analysis, user experience design, or content moderation, depending on the job function.</li>
      </Tab>
      <Tab eventKey="longer-tab" title="Goals">
      <ol>What goals would you like to achieve in the hypothetical position?
      Goals While Working at Instagram: Some goals you might consider while working at Instagram include:

<li>Contributing to the development of innovative features and improvements that enhance user engagement and satisfaction.</li>
<li>Collaborating with cross-functional teams to deliver high-quality products and experiences that align with Instagram's mission and values.</li>
<li>Leveraging data-driven insights and user feedback to iterate on existing features and drive product enhancements.</li>
<li>Advancing your career and professional development by seeking opportunities for growth, mentorship, and skill-building within the company.</li>
</ol>
      </Tab>
      <Tab eventKey="contact" title="Skillsets">
      Do you currently have the skillsets for the job?
      <ol>
        New Skills to Learn: Working at Instagram provides opportunities to learn and develop new skills, including but not limited to: 

<li>Mobile App Development: Gain experience in developing and maintaining mobile applications for iOS and Android platforms.</li>
<li>Data Analysis and Insights: Learn to analyze user data and metrics to gain insights into user behavior and preferences, informing product decisions and improvements.</li>
<li>User Experience Design: Understand principles of user-centered design and usability to create intuitive and engaging user experiences within the Instagram app.</li>
<li>Content Moderation and Safety: Acquire knowledge and skills related to content moderation, community guidelines enforcement, and user safety protocols to ensure a safe and positive user experience on the platform.</li>
      </ol>
      </Tab>
    </Tabs>
    </Col>
    <a href="https://about.instagram.com/about-us/careers" className='link'>Join us and help inspire creativity around the world</a>
    </Row>
    </Container>

    </div>
  )
}

export default FifthJobPageComponent
