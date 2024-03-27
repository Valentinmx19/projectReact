import { Button, Nav } from "react-bootstrap";
import NavNavigation from "../../components/NavNavigation";
import { useState } from "react";
import ModalNewUser from "../../components/ModalNewUser";

const styleNavLink = "fw-medium link-light link-opacity-75-hover"

const Administrator = () => {
    const [modalShow, setModalShow] = useState(false);

    const showModal = () => {
        modalShow ? setModalShow(false) : setModalShow(true);
    }

    return (
       <>
            <NavNavigation>
                <Nav >
                    <Nav.Link href="/" className={styleNavLink}>Users</Nav.Link>
                    <Nav.Link href="#action1" className={styleNavLink}>Admin</Nav.Link>
                </Nav>
            </NavNavigation>
            <div className="d-flex justify-content-end me-3">
                <Button className="btn btn-primary" onClick={showModal} ><i className="bi bi-plus-circle"></i> Agregar Usuario</Button> 
            </div>
            <ModalNewUser onHide={showModal} show={modalShow} />
            <hr className="col-sm-11 mx-auto" />

       </> 
    );
};

export default Administrator;