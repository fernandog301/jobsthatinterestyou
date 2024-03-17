import React from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import { Row, Col} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Image from 'react-bootstrap/Image';
import organization from '../assets/non-profit-logo-vector-28458701.jpg';

const ThirdJobPageComponent = () => {

    const navigate = useNavigate();

    const handlePageChange = () => {
        navigate('/');
    }

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/Third">Non profit organization </Navbar.Brand>
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
      <Image src={organization} thumbnail />
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
        <li>Culture: Non-profit organizations often have a mission-driven culture focused on making a positive impact on society. The work environment tends to be collaborative, supportive, and passionate about the organization's cause. Employees are motivated by a sense of purpose and the opportunity to contribute to meaningful projects that address social, environmental, or humanitarian issues.</li>
      <li>Benefits: While non-profit organizations may not offer the same financial benefits as for-profit companies, they often provide other valuable perks and benefits. These may include opportunities for professional development, flexible work arrangements, a supportive work environment, and the satisfaction of knowing that your work is making a difference in the world.</li>
      <li>Location: Non-profit organizations can be found in various locations, including urban centers, rural areas, and international locations. The location of the organization may influence factors such as cost of living, commute times, and access to amenities. Considerations such as proximity to public transportation, affordable housing, and a supportive community may be important when evaluating job opportunities.</li>
      </ul>
      </Tab>
      <Tab eventKey="profile" title="Job require">
      Does the job require the current stack that you know. Would you have learn new skills?
      <li>Job Requirements: Job requirements for junior software engineers at non-profit organizations may vary depending on the specific role and organization. Typical requirements may include proficiency in programming languages, software development frameworks, and tools relevant to the organization's technology stack. Additionally, roles may require skills in areas such as web development, database management, systems integration, or mobile app development, depending on the organization's needs and priorities.</li>
      </Tab>
      <Tab eventKey="longer-tab" title="Goals">
      What goals would you like to achieve in the hypothetical position?
      <ol>
        New Skills to Learn: Working at a non-profit organization can provide opportunities to learn and develop new skills, including: 

        <li>Understanding of Non-Profit Operations: Gain insight into the unique challenges and opportunities faced by non-profit organizations, including fundraising, donor management, volunteer coordination, and program delivery.</li>

        <li>Community Engagement: Learn how to engage with stakeholders, beneficiaries, volunteers, and donors to build relationships, raise awareness, and mobilize support for the organization's mission and programs.</li>

        <li>Social Impact Measurement: Acquire skills in monitoring and evaluating social impact metrics to assess the effectiveness of the organization's programs and initiatives and make data-driven decisions.</li>

        <li>Collaboration and Stakeholder Management: Develop skills in collaborating with cross-functional teams, partners, and external stakeholders to achieve shared goals and objectives.</li>
      </ol>
      </Tab>
      <Tab eventKey="contact" title="Skillsets">
      Do you currently have the skillsets for the job?
      <ol>
      Skillsets Needed: Some of the skillsets you may need for working at a non-profit organization as a junior software engineer include:

<li>Technical Skills: Proficiency in programming languages such as Python, JavaScript, Java, or Ruby, as well as familiarity with web development frameworks, databases, version control systems, and software development tools.</li>

<li>Problem-Solving Skills: Ability to analyze complex problems, identify creative solutions, and implement effective software solutions to address organizational challenges and opportunities.</li>

<li>Communication Skills: Strong verbal and written communication skills to effectively convey technical concepts, collaborate with team members, and engage with stakeholders.</li>

<li>Adaptability: Willingness to adapt to changing priorities, requirements, and environments, and the ability to learn quickly and apply new knowledge and skills as needed.</li>

<li>Passion for the Mission: Genuine interest in and commitment to the organization's mission and goals, along with a desire to contribute your skills and expertise to furthering social or humanitarian causes.</li>
</ol>
      </Tab>
    </Tabs>
    </Col>

    </Row>
    </Container>

    </div>
  )
}

export default ThirdJobPageComponent
