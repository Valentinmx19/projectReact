import Input from "../Input";
import { useForm, SubmitHandler } from "react-hook-form";
import CustomModal from "../CustomModal";
import { FC, useEffect, useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
import CustomSelect from "../CustomSelect";
import { GetDataWithSelects, UserPost, userPost } from "../../types/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { userHook } from "../../hooks/userHook";
import { departmentHook } from "../../hooks/departmentHook";
import { carreerHook } from "../../hooks/carreerHook";
import { subjectHook } from "../../hooks/subjectHook";
import { GroupHook } from "../../hooks/groupHook";

type NewUserModalType = {
    show: boolean;
    onHide: () => void;
}

const ModalNewUser: FC<NewUserModalType> = (props) => {
    const { postDataUser } = userHook();
    const [rol, setRol] = useState("");
    const [validated, setValidated] = useState(false);
    const [departments, setDepartments] = useState<GetDataWithSelects[]>([]);
    const [carreers, setCarreers] = useState<GetDataWithSelects[]>([]);
    const [subjects, setSubjects] = useState<GetDataWithSelects[]>([]);
    const [groups, setGroups] = useState<GetDataWithSelects[]>([])
    const [departmentId, setDepartmetnId] = useState("");
    const [carreerId, setCarreerId] = useState("");
    const [subjectId, setSubjectId] = useState("");
    const [groupId, setGroupId] = useState("")
    const {loadAllDepartment} = departmentHook();
    const {loadAllCarreer} = carreerHook();
    const {loadAllSubject} = subjectHook();
    const {loadAllGroup} = GroupHook();


    const onSubmit: SubmitHandler<UserPost> = async (data) => {
        const dato = {...data, rol}
        setValidated(true)


        try {
            const res = await postDataUser(dato);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
        
        window.location.reload();
    }

    const {control, handleSubmit, formState: {errors}} = useForm<UserPost>({resolver: yupResolver(userPost)});

    const handleSelectvalue = (e:React.ChangeEvent<HTMLSelectElement>) => {
        let rolCurrent = e.target.options[e.target.selectedIndex].value;
        setRol(rolCurrent);
    }

    const handleSelectvalueDepartment = (e:React.ChangeEvent<HTMLSelectElement>) => {
        let rolCurrent = e.target.options[e.target.selectedIndex].value;
        setDepartmetnId(rolCurrent);
    }

    const handleSelectvalueCarreer = (e:React.ChangeEvent<HTMLSelectElement>) => {
        let rolCurrent = e.target.options[e.target.selectedIndex].value;
        setCarreerId(rolCurrent);
    }

    const handleSelectvalueSubject = (e:React.ChangeEvent<HTMLSelectElement>) => {
        let rolCurrent = e.target.options[e.target.selectedIndex].value;
        setSubjectId(rolCurrent);
    }

    const handleSelectvalueGroup = (e:React.ChangeEvent<HTMLSelectElement>) => {
        let rolCurrent = e.target.options[e.target.selectedIndex].value;
        setGroupId(rolCurrent);
    }

    const loadDataAllDepartments = async () => {
        try {
            const res = await loadAllDepartment();
            setDepartments(res);
        } catch (error) {
            console.log(error);
        }
    };

    const loadDataAllCarreers = async () => {
        try {
            const res = await loadAllCarreer();
            setCarreers(res);
        } catch (error) {
            console.log(error);
        }
    };

    const loadDataAllSubjects = async () => {
        try {
            const res = await loadAllSubject();
            setSubjects(res);
        } catch (error) {
            console.log(error);
        }
    };

    const loadDataAllFGroups = async () => {
        try {
            const res = await loadAllGroup();
            setGroups(res);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadDataAllDepartments().catch(null);
        loadDataAllCarreers().catch(null);
        loadDataAllSubjects().catch(null);
        loadDataAllFGroups().catch(null);
    }, [])

    return (
       <>
            <CustomModal onHide={props.onHide} show={props.show} modaltitle="Nuevo Usuario">
                <Form validated={validated} onSubmit={handleSubmit(onSubmit)} >
                    <Row className="mb-3">
                        <Input control={control} colSize="3" fieldName="Matrícula*" fieldType="text" name="matricula" fieldErrors={errors.matricula?.message} fieldStyles="" />
                        <Input control={control} colSize="3" fieldName="Password*" fieldType="password" name="password" fieldErrors={errors.password?.message} fieldStyles="" />
                        <Input control={control} colSize="3" fieldName="Nombre*" fieldType="text" name="name" fieldErrors={errors.name?.message} fieldStyles="" />
                        <Input control={control} colSize="3" fieldName="Apellido Paterno*" fieldType="text" name="firstname" fieldErrors={errors.firstname?.message} fieldStyles="" />
                    </Row>
                    <Row className="mb-3">
                        <Input control={control} colSize="3" fieldName="Apellido Materno*" fieldType="text" name="lastname" fieldErrors={errors.lastname?.message} fieldStyles="" />
                        <Input control={control} colSize="3" fieldName="Edad*" fieldType="number" name="age" fieldErrors={errors.age?.message} fieldStyles="" />
                        <Input control={control} colSize="3" fieldName="Correo*" fieldType="email" name="email" fieldErrors={errors.email?.message} fieldStyles="" />
                        <Input control={control} colSize="3" fieldName="Teléfono*" fieldType="number" name="numberphone" fieldErrors={errors.numberphone?.message} fieldStyles="" />
                    </Row>
                    <Row className={`${rol ? "mb-3" : ""} d-flex justify-content-center`}>
                        <CustomSelect colSize="3" onChange={handleSelectvalue} fieldValue={rol}>
                            <option value={""} className="text-black fw-semibold" disabled >Seleccionar Rol</option>
                            <option value={"admin"}>Administrador</option>
                            <option value={"teacher"}>Docente</option>
                            <option value={"student"}>Alumno</option>
                        </CustomSelect>
                    </Row>
                    {rol === "admin" ? 
                        (<Row className={`"mb-3"d-flex justify-content-center`}>
                            <CustomSelect colSize="3" onChange={handleSelectvalueDepartment} fieldValue={departmentId}>
                                <option value={""} className="text-black fw-semibold" disabled >Seleccionar Departamento</option>
                                {departments?.map((department) => <option key={department.id} value={department.id}>{department.name}</option>)}
                            </CustomSelect>
                        </Row>)
                    : rol === "teacher" ? 
                        (<Row className={`"mb-3"d-flex justify-content-center`}>
                            <CustomSelect colSize="3" onChange={handleSelectvalueDepartment} fieldValue={departmentId}>
                                <option value={""} className="text-black fw-semibold" disabled >Seleccionar Departamento</option>
                                {departments?.map((department) => <option key={department.id} value={department.id}>{department.name}</option>)}
                            </CustomSelect>
                            <CustomSelect colSize="3" onChange={handleSelectvalueSubject} fieldValue={subjectId}>
                                <option value={""} className="text-black fw-semibold" disabled >Seleccionar Departamento</option>
                                {subjects?.map((subject) => <option key={subject.id} value={subject.id}>{subject.name}</option>)}
                            </CustomSelect>
                        </Row>)
                    : rol === "student" ?
                        (<Row className={`"mb-3"d-flex justify-content-center`}>
                            <CustomSelect colSize="3" onChange={handleSelectvalueCarreer} fieldValue={carreerId}>
                                <option value={""} className="text-black fw-semibold" disabled >Seleccionar Carrera</option>
                                {carreers?.map((carreer) => <option key={carreer.id} value={carreer.id}>{carreer.name}</option>)}
                            </CustomSelect>
                            <CustomSelect colSize="3" onChange={handleSelectvalueGroup} fieldValue={groupId}>
                                <option value={""} className="text-black fw-semibold" disabled >Seleccionar Groupo</option>
                                {groups?.map((group) => <option key={group.id} value={group.id}>{group.name}</option>)}
                            </CustomSelect>
                        </Row>) 
                    : ""}
                    <hr />
                    <Button type="submit" style={{display: "flex", float: 'right'}}>Enviar</Button>
                    <Button onClick={props.onHide} style={{display: "flex", float: 'right'}} variant="outline-dark me-2 bg-hover-secondary border-0">Close</Button>
                </Form>
            </CustomModal>
       </>
    );
};

export default ModalNewUser;