import { Row, Form, Button } from "react-bootstrap";
import CustomModal from "../CustomModal";
import Input from "../Input";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomSelect from "../CustomSelect";
import { BasicPost, basicPost } from "../../types/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { departmentHook } from "../../hooks/departmentHook";

type NewDepartmentModalType = {
    show: boolean;
    onHide: () => void;
}

const ModalNewDepartment: FC<NewDepartmentModalType> = (props) => {
    const {postDataDepartment} = departmentHook();
    const { control, handleSubmit, formState: {errors}} = useForm<BasicPost>({resolver: yupResolver(basicPost)});
    const [direct, setDirect] = useState("");
    const [validated, setValidated] = useState(false);

    const onSubmit: SubmitHandler<BasicPost> = async (data) => {

        setValidated(true)
        
        try{
            const dat = await postDataDepartment(data);
            console.log(dat)
        }catch(err){console.log(err)}

        window.location.reload()
    }


    const handleSelectvalue = (e:React.ChangeEvent<HTMLSelectElement>) => {
        let rolCurrent = e.target.options[e.target.selectedIndex].value;
        setDirect(rolCurrent);
    }

    return (
        <>
            <CustomModal onHide={props.onHide} show={props.show} modaltitle="Nuevo Departamento" >
                <Form validated={validated} onSubmit={handleSubmit(onSubmit)} >
                    <Row className="mb-3 justify-content-center align-items-center">
                        <Input control={control} colSize="3" fieldName="Nombre*" fieldType="text" name="name" fieldErrors={errors.name?.message} fieldStyles="" />
                        <CustomSelect colSize="3" onChange={handleSelectvalue} fieldTitle="Seleccionar Director" fieldValue={direct}>
                            <option value={""} className="text-black fw-semibold" disabled >Directores</option>
                            <option value={"admin"}>Administrador</option>
                            <option value={"docente"}>Docente</option>
                            <option value={"alumno"}>Alumno</option>
                        </CustomSelect>
                    </Row>
                    <Button type="submit" style={{display: "flex", float: 'right'}}>Enviar</Button>
                    <Button onClick={props.onHide} style={{display: "flex", float: 'right'}} variant="outline-dark me-2 bg-hover-secondary border-0">Cancelar</Button>
                </Form>
            </CustomModal>
        </>
    );
};

export default ModalNewDepartment;