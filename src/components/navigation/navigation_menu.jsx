import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationMenu() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Lukáš Juřena</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#skill">V čem umím </Nav.Link>
                        <Nav.Link href="#about-me">O mně</Nav.Link>
                        <Nav.Link href="#my-work">Moje práce</Nav.Link>
                        <Nav.Link href="#contact">Kontakt</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationMenu;