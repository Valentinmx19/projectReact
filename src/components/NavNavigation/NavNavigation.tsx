import { ReactNode } from "react";
import { Navbar, Container, Offcanvas , Image} from "react-bootstrap";

const NavNavigation = ({children}:{children: ReactNode}) => {
    return (
        <>
            {['sm']?.map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-success mb-3">
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <Image src="https://utsh.edu.mx/wp-content/uploads/2021/01/logo_nomb_utsh.png" width={'250px'} />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNabvar-expand-${expand}`} />
                        <Navbar.Offcanvas 
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    UTSH
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                {children}
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>

                </Navbar>
            ))}
        </>
    );
};

export default NavNavigation;