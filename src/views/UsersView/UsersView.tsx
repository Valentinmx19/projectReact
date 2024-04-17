import { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import CustomSelect from "../../components/CustomSelect";
import ModalNewUser from "../../components/ModalNewUser";

const UsersView = () => {
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
                            <option disabled value={""} className="text-black fw-semibold">
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
                            <option value={"all"}>
                                Todos
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

export default UsersView;