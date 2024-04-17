import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import CustomSelect from "../../components/CustomSelect";
import ModalNewCareer from "../../components/ModalNewCareer";
import { Outlet, useParams } from "react-router-dom";
import { departmentHook } from "../../hooks/departmentHook";
import { GetDataWithSelects } from "../../types/user";
import SemesterCard from "../../components/SemesterCard";

const DepartmentiByIdView = () => {
    const [modalShow, setModalShow] = useState(false);
    const showModal = () => {
        modalShow ? setModalShow(false) : setModalShow(true);
    }
    const [filterValue, setFIlterValue] = useState("");
    const [semesters, setSemesters] = useState<GetDataWithSelects[]>([])
    const {loadAllDepartment} = departmentHook();
    const id = useParams().id;

    const handleSelectvalue = (e:React.ChangeEvent<HTMLSelectElement>) => {
        let rolCurrent = e.target.options[e.target.selectedIndex].value;
        setFIlterValue(rolCurrent);
    }

    const loadAllDataDepartment = async () => {
        try {
            const res = await loadAllDepartment(id);
            const semester = res.carreers;
            setSemesters(semester);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadAllDataDepartment().catch(null);
    }, [])

    return (
       <>
            <Outlet />
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
                <Button className="btn btn-primary" onClick={showModal} ><i className="bi bi-plus-circle"></i> Agregar Carrera</Button> 
            </div>
            <ModalNewCareer onHide={showModal} show={modalShow} />
            <hr className="col-sm-11 mx-auto" />
            <Container>
                {
                    semesters.length != 0 ?
                    (semesters?.map((semester) => <SemesterCard key={semester.id} ruta={String(semester.id)} title={semester.name} medida="col-sm-11 btn-success" />))
                    :
                    <h2 className="text-center">No hay Carreras Disponibles</h2>
                }
            </Container>
       </> 
    );
};

export default DepartmentiByIdView;