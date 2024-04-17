import { useEffect, useState } from "react";
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import CustomSelect from "../../components/CustomSelect";
import { useParams } from "react-router-dom";
import { carreerHook } from "../../hooks/carreerHook";
import { GetDataWithSelects } from "../../types/user";

const CarreerByIdView = () => {
    const [filterValue, setFIlterValue] = useState("");
    const id = useParams().id
    const {loadAllCarreer} = carreerHook();
    const [semesters, setSemesters] = useState<GetDataWithSelects[]>([]);

    const handleSelectvalue = (e:React.ChangeEvent<HTMLSelectElement>) => {
        let rolCurrent = e.target.options[e.target.selectedIndex].value;
        setFIlterValue(rolCurrent);
    }

    const loadSemestersInCarreer = async () => {
        try {
            const res = await loadAllCarreer(id);
            const semester =  res.semesters;
            setSemesters(semester);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadSemestersInCarreer().catch(null);
    }, [])

    console.log(semesters);
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
                            <option value={"all"} >
                                Todos
                            </option>
                        </CustomSelect>
                    </Row>
                </Form>
            </div>
            <hr className="col-sm-11 mx-auto" />
            <Container>
                {
                    semesters.length != 0 ? 
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
                                    semesters?.map((semester) => (
                                        <tr>
                                            <td>{semester.id}</td>
                                            <td>{semester.name}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                     ) : <h2 className="text-center">No hay Cuatrimestres Disponibles</h2>
                }
            </Container>
       </> 
    );
};

export default CarreerByIdView;