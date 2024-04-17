import { SubmitHandler, useForm } from "react-hook-form";
import CustomModal from "../CustomModal";
import { FC, useState, useEffect } from "react";
import { Row, Button, Form } from "react-bootstrap";
import Input from "../Input";
import { BasicPost, GetDataWithSelects, basicPost } from "../../types/user";
import { departmentHook } from "../../hooks/departmentHook";
import { carreerHook } from "../../hooks/carreerHook";
import CustomSelect from "../CustomSelect";
import { yupResolver } from "@hookform/resolvers/yup";

type NewCareerrModalType = {
    show: boolean;
    onHide: () => void;
}

const ModalNewCareer: FC<NewCareerrModalType> = (props) => {
    const [departments, setDepartmnents] = useState<GetDataWithSelects[]>([])
    const {loadAllDepartment} = departmentHook();
    const { control, handleSubmit, formState: {errors} } = useForm<BasicPost>({resolver: yupResolver(basicPost)});
    const [departmentId, setDepartmnentId] = useState("");
    const [validated, setValidated] = useState(false);
    const {postDataCarreer} = carreerHook();


    const saveCarreer: SubmitHandler<BasicPost> = async (data) => {
        const department = Number(departmentId);
        const datos = {...data, department}

        setValidated(true)
        
        try{
            const dat = await postDataCarreer(datos);
            console.log(dat)
        }catch(err){console.log(err)}

        window.location.reload()
    }

    const handleSelectvalue = (e:React.ChangeEvent<HTMLSelectElement>) => {
        let rolCurrent = e.target.options[e.target.selectedIndex].value;
        setDepartmnentId(rolCurrent);
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

    return (
        <>
            <CustomModal onHide={props.onHide} show={props.show} modaltitle="Nueva Carrera" >
                <Form validated={validated} onSubmit={handleSubmit(saveCarreer)} >
                    <Row className="mb-3 justify-content-center align-items-center">
                        <Input control={control} colSize="3" fieldName="Nombre*" fieldType="text" name="name" fieldErrors={errors.name?.message} fieldStyles="" />
                        <CustomSelect colSize="3" onChange={handleSelectvalue} fieldTitle="Seleccionar Departamento*" fieldValue={departmentId}>
                            <option value={""} className="text-black fw-semibold" disabled >Departamentos</option>
                            {departments?.map((department) => <option key={department.id} value={department.id}>{department.name}</option>)}
                        </CustomSelect>
                    </Row>
                    <Button type="submit" style={{display: "flex", float: 'right'}}>Enviar</Button>
                    <Button onClick={props.onHide} style={{display: "flex", float: 'right'}} variant="outline-dark me-2 bg-hover-secondary border-0">Cancelar</Button>
                </Form>
            </CustomModal>
        </>
    );
};

export default ModalNewCareer;