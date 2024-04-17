import { Button, Col, Form, Row } from "react-bootstrap";
import CustomSelect from "../../components/CustomSelect";
import { useState } from "react";
import ModalNewGroup from "../../components/ModalNewGroup";

const GroupView = () => {
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
                            <option value={"all"}>
                                Todos
                            </option>
                        </CustomSelect>
                    </Row>
                </Form>
                <Button className="btn btn-primary" onClick={showModal} ><i className="bi bi-plus-circle"></i> Agregar Grupo</Button> 
            </div>
            <ModalNewGroup show={modalShow} onHide={showModal} />
        </>
    );
};

export default GroupView;