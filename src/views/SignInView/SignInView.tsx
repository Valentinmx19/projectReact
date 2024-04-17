import { Button, Card, Container, Form, Row, Image } from "react-bootstrap";
import Input from "../../components/Input";
import { GetDataWithSelects, UserPost, userPost } from "../../types/user";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import CustomSelect from "../../components/CustomSelect";
import { Link, useNavigate } from "react-router-dom";
import logoApp from "../../assets/logo.jpg";
import CustomModal from "../../components/CustomModal";
import "./signIn.css";
import { carreerHook } from "../../hooks/carreerHook";
import { userHook } from "../../hooks/userHook";

const SignInView = () => {
    const [validated, setValidated] = useState(false);
    const [carreers, setCarreers] = useState<GetDataWithSelects[]>([]);
    const [career, setCarreer] = useState("");
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const {loadAllCarreer} = carreerHook();
    const {postDataUser} = userHook();

    const {control, handleSubmit, formState: {errors}} = useForm<UserPost>({resolver: yupResolver(userPost)});

    const onSubmit: SubmitHandler<UserPost> = (data) => {
        setValidated(true);
        errors.matricula ? "" : setShow(!show)
    }

    const onSubmitModal: SubmitHandler<UserPost> = async (data) => {
        const carreerId = Number(career);
        const age = Number(data.age);
        const numberphone = Number(data.numberphone);
        const datos = {...data, age, numberphone,carreerId, rol: "student"}

        try {
            const dat = await postDataUser(datos);
            console.log(dat);
        } catch (error) {
            console.log(error);
        }
        // modalShow();
        // navigate("/");
    }

    const handleSelectvalue = (e:React.ChangeEvent<HTMLSelectElement>) => {
        let rolCurrent = e.target.options[e.target.selectedIndex].value;
        setCarreer(rolCurrent);
    }

    const modalShow = () => {
        setShow(!show)
    };

    const loadDataAllCarreers = async () => {
        try {
            const dat = await loadAllCarreer();
            setCarreers(dat);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadDataAllCarreers().catch(null);
    }, [])

    return (
        <Container className="d-flex flex-column align-items-center justify-content-center" style={{height: "100vh"}} fluid >
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <Card className="mx-auto">
                <Card.Body>
                    <h1 className="text-center">Registrarse</h1>
                    <div className="mb-3 mt-2 text-center">
                        <Image src={logoApp} width="200px" className="rounded-circle" />
                    </div>
                    <Form validated={validated} onSubmit={handleSubmit(onSubmit)} >
                        <Row className="mb-3">
                            <Input control={control} colSize="3" fieldName="Matrícula*" fieldType="text" name="matricula" fieldErrors={errors.matricula?.message} fieldStyles="" />
                            <Input control={control} colSize="3" fieldName="Nombre(s)*" fieldType="text" name="name" fieldErrors={errors.name?.message} fieldStyles="" />
                            <Input control={control} colSize="3" fieldName="Apellido Paterno*" fieldType="text" name="firstname" fieldErrors={errors.firstname?.message} fieldStyles="" />
                            <Input control={control} colSize="3" fieldName="Apellido Materno*" fieldType="text" name="lastname" fieldErrors={errors.lastname?.message} fieldStyles="" />
                        </Row>
                        <Row className="mb-3">
                            <Input control={control} colSize="3" fieldName="Edad*" fieldType="number" name="age" fieldErrors={errors.age?.message} fieldStyles="" />
                            <Input control={control} colSize="3" fieldName="Correo*" fieldType="email" name="email" fieldErrors={errors.email?.message} fieldStyles="" />
                            <Input control={control} colSize="3" fieldName="Teléfono*" fieldType="number" name="numberphone" fieldErrors={errors.numberphone?.message} fieldStyles="" />
                            <Input control={control} colSize="3" fieldName="Contraseña*" fieldType="password" name="password" fieldErrors={errors.password?.message} fieldStyles="" />
                        </Row>
                        <Row className="mb-3 d-flex justify-content-center">
                            <CustomSelect colSize="3" onChange={handleSelectvalue} fieldValue={career} >
                                <option value={""} className="text-black fw-semibold" disabled >Seleccionar Carrera</option>
                                {carreers?.map((carreer) => <option key={carreer.id} value={carreer.id}>{carreer.name}</option>)}
                            </CustomSelect>
                        </Row>
                        <hr />
                        <Button type="submit" style={{display: "flex", float: 'right'}}>Enviar</Button>
                        <Link className="btn btn-outline-dark me-2 border border-0" style={{display: "flex", float: 'right'}} to={"/"}>Iniciar Sesión</Link>
                    </Form>
                </Card.Body>
            </Card>
            <CustomModal modaltitle="Confirmar Datos" onHide={modalShow} show={show} size="sm" >
                <Form onSubmit={handleSubmit(onSubmitModal)}>
                    <Input control={control} colSize="12" fieldName="Matrícula*" fieldType="text" name="matricula" fieldErrors={errors.matricula?.message} readonly={true} fieldStyles="" />
                    <Input control={control} colSize="12" fieldName="Contraseña*" fieldType="text" name="password" fieldErrors={errors.password?.message} readonly={true} fieldStyles="" />
                    <hr />
                    <Button type="submit" style={{display: "flex", float: 'right'}}>Confirmar</Button>
                    <Button onClick={modalShow} style={{display: "flex", float: 'right'}} variant="outline-dark me-2 bg-hover-secondary border-0">Cancelar</Button>
                </Form>
            </CustomModal>
        </Container>
    );
};

export default SignInView;