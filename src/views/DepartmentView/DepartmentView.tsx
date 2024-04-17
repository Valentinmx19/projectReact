import { Button, Col, Container, Form, Row } from "react-bootstrap";
import CustomSelect from "../../components/CustomSelect";
import { useState, useEffect } from "react";
import ModalNewDepartment from "../../components/ModalNewDepartment";
import DepartmentCard from "../../components/DepartmentCard";
import { departmentHook } from "../../hooks/departmentHook";
import { GetDataWithSelects } from "../../types/user";

const DepartmentView = () => {
    const [departments, setDepartmnents] = useState<GetDataWithSelects[]>([])

    const {loadAllDepartment} = departmentHook();

    const [modalShow, setModalShow] = useState(false);
    const showModal = () => {
        setModalShow(!modalShow);
    }
    const [filterValue, setFIlterValue] = useState("");

    const handleSelectvalue = (e:React.ChangeEvent<HTMLSelectElement>) => {
        let rolCurrent = e.target.options[e.target.selectedIndex].value;
        let currentIndex = e.target.options.selectedIndex;
        setFIlterValue(rolCurrent);
    }

    const loadAllDepartments = async () => {
        try{
            const response = await loadAllDepartment();
            setDepartmnents(response)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        loadAllDepartments().catch(null)
    }, [])

    console.log(departments)

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
                <Button className="btn btn-primary" onClick={showModal} ><i className="bi bi-plus-circle"></i> Agregar Departamento</Button> 
            </div>
            <ModalNewDepartment onHide={showModal} show={modalShow} />
            <hr className="col-sm-11 mx-auto" />
            <Container fluid className="text-center">
                {
                    departments?.map((department) => <DepartmentCard director="Sin Asignar" ruta={String(department.id)} medida="col-sm-11 btn-dark" title={department.name} />)
                }
            </Container>
        </>
    );
};

export default DepartmentView;