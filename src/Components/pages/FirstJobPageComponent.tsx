import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Image from 'react-bootstrap/Image';
import Netflix from '../assets/netflixn.webp';
import { Row, Col} from 'react-bootstrap';

const FirstJobPageComponent = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/First">Netflix</Navbar.Brand>
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
      <Image src={Netflix} thumbnail />
      
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
            <li>
            Netflix is renowned for its unique culture, characterized by freedom and responsibility. Employees are given autonomy to make decisions and are trusted to manage their time effectively. This culture fosters innovation and encourages individuals to take risks and learn from failures. As someone who values a dynamic and collaborative work environment, working at Netflix would provide an opportunity to thrive in such a culture.
            </li>
            <li>
            Benefits: Netflix offers competitive benefits packages, including health insurance, retirement plans, and stock options. Additionally, the company provides various wellness programs and resources to support employees' physical and mental well-being. These benefits demonstrate Netflix's commitment to employee satisfaction and overall welfare.
            </li>
            <li>Hybrid Work Model: Netflix has embraced a hybrid work model, allowing employees to work remotely or from the office, depending on their preferences and job requirements. This flexibility provides the opportunity to maintain a healthy work-life balance while still collaborating effectively with colleagues.</li>
            <li>Location: While Netflix has headquarters in Los Gatos, California, and offices in various locations worldwide, it also offers remote work opportunities. This means that geographical location may not be a barrier to joining the company, opening up possibilities for individuals who prefer or need to work remotely.</li>
        </ol>
      </Tab>
      <Tab eventKey="profile" title="Job require">
      Does the job require the current stack that you know. Would you have learn new skills?
      <ul>
        <li>Skills Required and Learning Opportunities: Depending on the specific role, the job may require proficiency in certain technologies or skill sets. Netflix values continuous learning and encourages employees to develop new skills to stay ahead in their respective fields. While I may possess some of the required skills, I am open to learning new technologies or expanding my expertise to meet the demands of the role. Embracing opportunities for growth and development is essential for success in any position at Netflix.</li>
      </ul>
      </Tab>
      <Tab eventKey="longer-tab" title="Goals">
      What goals would you like to achieve in the hypothetical position?
      <ul>
        <li>Goals in the Hypothetical Position: In a hypothetical position at Netflix, my goals would include contributing to impactful projects that align with the company's vision and values. I would aim to leverage my skills and expertise to drive innovation, collaborate effectively with colleagues, and deliver high-quality results. Additionally, I would strive to learn from experienced professionals, take on new challenges, and continuously improve my abilities.</li>
      </ul>
      </Tab>
      <Tab eventKey="contact" title="Skillsets">
      Do you currently have the skillsets for the job?
      <ul>
        <li>Current Skillsets: While I possess certain skillsets that may be relevant to the job, such as Frontend(HTML5, CSS3, TypeScript), Mobile Development (e.g., iOS, Android, React Native) , I acknowledge that there may be areas where I need to further develop or refine my abilities. However, I am confident in my ability to adapt and learn quickly, and I am committed to investing time and effort into acquiring any additional skills necessary to excel in the role.</li>
      </ul>
      </Tab>
    </Tabs>
    </Col>
    </Row>
    </Container>
    </div>
  )
}

export default FirstJobPageComponent
