import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import CustomSelect from "../../components/CustomSelect";
import ModalNewCareer from "../../components/ModalNewCareer";
import { carreerHook } from "../../hooks/carreerHook";
import { GetDataWithSelects } from "../../types/user";
import CarreerCard from "../../components/CarreerCard";


const CareerView = () => {
    const [modalShow, setModalShow] = useState(false);
    const showModal = () => {
        modalShow ? setModalShow(false) : setModalShow(true);
    }
    const [filterValue, setFIlterValue] = useState("");
    const {loadAllCarreer} = carreerHook();
    const [carreers, setCarreers] = useState<GetDataWithSelects[]>([]);

    const handleSelectvalue = (e:React.ChangeEvent<HTMLSelectElement>) => {
        let rolCurrent = e.target.options[e.target.selectedIndex].value;
        setFIlterValue(rolCurrent);
    }

    const loadDataAllCarreer = async () => {
        try {
            const res = await loadAllCarreer();
            setCarreers(res)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadDataAllCarreer().catch(null);
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
                <Button className="btn btn-primary" onClick={showModal} ><i className="bi bi-plus-circle"></i> Agregar Carrera</Button> 
            </div>
            <ModalNewCareer onHide={showModal} show={modalShow} />
            <hr className="col-sm-11 mx-auto" />
            <Container fluid className="text-center">
                {carreers?.map((carreer) => <CarreerCard key={carreer.id} ruta={String(carreer.id)} title={carreer.name} medida="col-sm-11 btn-success" />)}
            </Container>
       </> 
    );
};

export default CareerView;