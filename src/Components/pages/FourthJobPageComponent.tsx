import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Image from 'react-bootstrap/Image';
import { Row, Col} from 'react-bootstrap';
import SUPERCELL from '../assets/image.webp';

const FourthJobPageComponent = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/Fourth">SUPERCELL</Navbar.Brand>
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
      <Image src={SUPERCELL} thumbnail className=''/>
      
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
      <ol>
        <li>Culture: Supercell is renowned for its unique company culture that emphasizes creativity, autonomy, and a player-first approach. The company fosters an environment where employees are encouraged to take ownership of their work, pursue their passions, and innovate freely. The flat organizational structure promotes open communication and collaboration, fostering a supportive and inclusive culture where everyone's voice is valued.</li>
      <li>Benefits: Supercell offers competitive benefits packages to its employees, including health insurance, retirement plans, and stock options. Additionally, the company provides various perks and amenities, such as flexible work arrangements, wellness programs, catered meals, and recreational facilities. These benefits contribute to the overall well-being and satisfaction of employees, enhancing their experience at Supercell.</li>
      <li>Hybrid Work Model: Supercell embraces a hybrid work model, allowing employees to work remotely or from the office, depending on their preferences and job requirements. This flexibility enables individuals to achieve a healthy work-life balance while still collaborating effectively with their colleagues and contributing to the company's goals.</li>
      <li>Location: Supercell's headquarters is located in Helsinki, Finland, a vibrant and dynamic city known for its high quality of life, thriving tech scene, and beautiful natural surroundings. The company also has offices in other locations around the world, providing opportunities for individuals to work in diverse and multicultural environments.</li>
      </ol>
      </Tab>
      <Tab eventKey="profile" title="Job require">
      Does the job require the current stack that you know. Would you have learn new skills?
        <ul>
            <li>Job Requirements: Job requirements at Supercell may vary depending on the specific role, but typical positions may require proficiency in programming languages, game development frameworks, and software development tools relevant to the gaming industry. Additionally, roles may require skills in areas such as game design, user experience, data analysis, or community management, depending on the job function.</li>
            
        </ul>
      </Tab>
      <Tab eventKey="longer-tab" title="Goals">
      What goals would you like to achieve in the hypothetical position?
        <ol>
            New Skills to Learn: Working at Supercell provides opportunities to learn and develop new skills, including but not limited to:

            <li>Game Development: Gain experience in developing and maintaining mobile games for various platforms, including iOS and Android.</li>
            <li>Game Design: Learn principles of game design and mechanics to create engaging and immersive gameplay experiences.</li>
            <li>Community Management: Acquire skills in community engagement, moderation, and customer support to foster a positive and vibrant gaming community.</li>
            <li>Data Analysis and Insights: Understand how to analyze player data and metrics to gain insights into player behavior and preferences, informing game design decisions and optimizations.</li>
        </ol>
      </Tab>
      <Tab eventKey="contact" title="Skillsets">
      Do you currently have the skillsets for the job?
        <ol>
            
            Skillsets Needed: Some of the skillsets you may need for working at Supercell include:

            <li>Proficiency in programming languages such as C++, Java, or Objective-C.</li>
            <li>Knowledge of game development frameworks such as Unity or Unreal Engine.</li>
            <li>Understanding of software engineering principles, algorithms, and data structures.</li>
            <li>Strong problem-solving and analytical skills.</li>
            <li>Effective communication and collaboration skills to work effectively within cross-functional teams.
            </li>
        </ol>
      </Tab>
    </Tabs>
    </Col>
    <a href="https://supercell.com/en/careers/" className='link'>We create games that are played for years and remembered forever.</a>

    </Row>
    </Container>

    </div>
  )
}

export default FourthJobPageComponent
