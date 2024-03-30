import { Button, Col, Form, Nav, Row } from "react-bootstrap";
import NavNavigation from "../../components/NavNavigation";
import { useState } from "react";
import ModalNewUser from "../../components/ModalNewUser";
import CustomSelect from "../../components/CustomSelect";

const styleNavLink = "fw-medium link-light link-opacity-75-hover"

const Administrator = () => {
    const [modalShow, setModalShow] = useState(false);

    const showModal = () => {
        modalShow ? setModalShow(false) : setModalShow(true);
    }

    const [filterValue, setFIlterValue] = useState("");

    const handleSelectvalue = (e:React.ChangeEvent<HTMLSelectElement>) => {
        let rolCurrent = e.target.options[e.target.selectedIndex].value;
        let currentIndex = e.target.options.selectedIndex;
        setFIlterValue(rolCurrent);
    }

    return (
       <>
            <NavNavigation>
                <Nav >
                    <Nav.Link href="/" className={styleNavLink} >Users</Nav.Link>
                    <Nav.Link href="#action2" className={styleNavLink} >Carreras</Nav.Link>
                 </Nav>
            </NavNavigation>
            <div className="d-flex justify-content-end me-3 align-items-center">
                <Form className="me-4">
                    <Row md={"12"} className="align-items-center">
                        <Col md={"8"}>
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                            />
                        </Col>
                        <CustomSelect colSize="4" onChange={handleSelectvalue} fieldValue={filterValue} >
                            <option disabled value={""}>
                                Filtro
                            </option>
                            <option value={"admins"}>
                                Administradores
                            </option>
                            <option value={"teachers"}>
                                Docentes
                            </option>
                            <option value={"groups"}>
                                Grupos
                            </option>
                            <option value={"students"}>
                                Alumnos
                            </option>
                        </CustomSelect>
                    </Row>
                </Form>
                <Button className="btn btn-primary" onClick={showModal} ><i className="bi bi-plus-circle"></i> Agregar Usuario</Button> 
            </div>
            <ModalNewUser onHide={showModal} show={modalShow} />
            <hr className="col-sm-11 mx-auto" />

       </> 
    );
};

export default Administrator;