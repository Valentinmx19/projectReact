import { Button, Col, Container, Form, Row } from "react-bootstrap";
import CustomSelect from "../../components/CustomSelect";
import { useEffect, useState } from "react";
import ModalNewSemester from "../../components/ModalNewSemester";
import { GetDataWithSelects } from "../../types/user";
import { semesterHook } from "../../hooks/semesterHook";
import SemesterCard from "../../components/SemesterCard";

const SubjectView = () => {
    const [modalShow, setModalShow] = useState(false);
    const showModal = () => {
        modalShow ? setModalShow(false) : setModalShow(true);
    }
    const [filterValue, setFIlterValue] = useState("");
    const [semesters, setSemesters] = useState<GetDataWithSelects[]>([]);
    const {loadAllSemester} = semesterHook();

    const handleSelectvalue = (e:React.ChangeEvent<HTMLSelectElement>) => {
        let rolCurrent = e.target.options[e.target.selectedIndex].value;
        setFIlterValue(rolCurrent);
    }

    const loadDataAllSemesters = async () => {
        try {
            const res = await loadAllSemester();
            setSemesters(res);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadDataAllSemesters().catch(null);
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
                <Button className="btn btn-primary" onClick={showModal} ><i className="bi bi-plus-circle"></i> Agregar Cuatrimestre</Button> 
            </div>
            <ModalNewSemester show={modalShow} onHide={showModal} />
            <hr className="col-sm-11 mx-auto" />
            <Container fluid className="text-center">
                {semesters?.map((semester) => <SemesterCard key={semester.id} ruta={String(semester.id)} title={semester.name} medida="col-sm-11 btn-success" />)}
            </Container>
        </>
    );
};

export default SubjectView;