import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo_gazebo from '../../gazebo-logo.jpg'
import './MyNavBar.css';

function MyNavBar() {
    return (
        <Navbar expand="lg" variant="custom-bg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo_gazebo} className="logo" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">About</Nav.Link>
                        <Nav.Link href="#link">Sessions</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavBar;