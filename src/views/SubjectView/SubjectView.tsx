import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import CustomSelect from "../../components/CustomSelect";
import { useEffect, useState } from "react";
import ModalNewSubject from "../../components/ModalNewSubject";
import { GetDataWithSelects } from "../../types/user";
import { subjectHook } from "../../hooks/subjectHook";

const SubjectView = () => {
    const [modalShow, setModalShow] = useState(false);
    const showModal = () => {
        modalShow ? setModalShow(false) : setModalShow(true);
    }
    const [filterValue, setFIlterValue] = useState("");
    const [subjects, setSubjects] = useState<GetDataWithSelects[]>([]);
    const {loadAllSubject} = subjectHook();

    const handleSelectvalue = (e:React.ChangeEvent<HTMLSelectElement>) => {
        let rolCurrent = e.target.options[e.target.selectedIndex].value;
        setFIlterValue(rolCurrent);
    }

    const loadDataAllSubjects = async () => {
        try {
            const res = await loadAllSubject();
            setSubjects(res);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadDataAllSubjects().catch(null);
    }, [])

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
                <Button className="btn btn-primary" onClick={showModal} ><i className="bi bi-plus-circle"></i> Agregar Materia</Button> 
            </div>
            <ModalNewSubject show={modalShow} onHide={showModal} />
            <hr className="col-sm-11 mx-auto" />
            <Container fluid className="text-center">
            {
                    subjects.length != 0 ? 
                    (
                        <Table hover bordered variant="dark" className="text-center">
                            <thead>
                                <tr >
                                    <th>Id</th>
                                    <th>Nombre</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    subjects?.map((subject) => (
                                        <tr>
                                            <td>{subject.id}</td>
                                            <td>{subject.name}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                     ) : <h2 className="text-center">No hay Materias Disponibles</h2>
                }
            </Container>
        </>
    );
};

export default SubjectView;