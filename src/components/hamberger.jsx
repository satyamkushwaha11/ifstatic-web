import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample() {
    return (
        <>
            {/* {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => ( */}
            <Navbar key={false} bg="" expand={false} className="mb-0">
                <Container fluid>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${false}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <div className='p-2 p-md-3'>
                                <img src='/icons/ifStatic.png' className='logo' />
                            </div>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className=''>
                                <ul className='  align-items-center ' type='none'>
                                    <li className='px-2 py-1 mb-2     header_opt_li'>Home</li>
                                    <li className='px-2 py-1 mb-2    header_opt_li'>Free UI Trial</li>
                                    <li className='px-2 py-1 mb-2  header_opt_li'>Services</li>
                                    <li className='px-2 py-1 mb-2  header_opt_li'>Portofolio</li>
                                    <li className=''>
                                        <div className='btn btn-primary  border-0 rounded-0'>
                                            Contact Us
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${false}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            {/* ))} */}
        </>
    );
}

export default OffcanvasExample;