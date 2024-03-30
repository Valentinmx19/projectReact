import Input from "../Input";
import { useForm } from "react-hook-form";
import CustomModal from "../CustomModal";
import { FC, useEffect, useState } from "react";
import { Form, Row } from "react-bootstrap";
import CustomSelect from "../CustomSelect";
import AdminFormInfo from "../AdminFormInfo";
import DocenteFormInfo from "../DocenteFormInfo";
import AlumnoFormInfo from "../AlumnoFormInfo";

type NewUserModalType = {
    show: boolean;
    onHide: () => void;
}

const ModalNewUser: FC<NewUserModalType> = (props) => {

    const {control, handleSubmit, formState: {errors}} = useForm();
    const [rol, setRol] = useState("");

    const handlerNewUser = () => console.log("Guardado");

    const handleSelectvalue = (e:React.ChangeEvent<HTMLSelectElement>) => {
        let rolCurrent = e.target.options[e.target.selectedIndex].value;
        let currentIndex = e.target.options.selectedIndex;
        setRol(rolCurrent);
    }

    return (
       <>
            <CustomModal onHide={props.onHide} show={props.show} modaltitle="Nuevo Usuario" titlebuttonchanges="Guardar" actionbuttonchanges={handlerNewUser} >
                <Row className="mb-3">
                    <Input control={control} colSize="3" fieldName="Username*" fieldType="text" name="username" fieldErrors={""} fieldStyles="" />
                    <Input control={control} colSize="3" fieldName="Password*" fieldType="password" name="password" fieldErrors="" fieldStyles="" />
                    <Input control={control} colSize="3" fieldName="Nombre*" fieldType="text" name="firstname" fieldErrors={""} fieldStyles="" />
                    <Input control={control} colSize="3" fieldName="Apellido Paterno*" fieldType="text" name="lastname" fieldErrors="" fieldStyles="" />
                </Row>
                <Row className="mb-3">
                    <Input control={control} colSize="3" fieldName="Apellido Materno*" fieldType="text" name="lastnamemom" fieldErrors="" fieldStyles="" />
                    <Input control={control} colSize="3" fieldName="Edad*" fieldType="number" name="age" fieldErrors="" fieldStyles="" />
                    <Input control={control} colSize="3" fieldName="Correo*" fieldType="email" name="email" fieldErrors="" fieldStyles="" />
                    <Input control={control} colSize="3" fieldName="Teléfono*" fieldType="text" name="numberphone" fieldErrors="" fieldStyles="" />
                </Row>
                <Row className={`${rol ? "mb-3" : ""} d-flex justify-content-center`}>
                    <CustomSelect colSize="3" onChange={handleSelectvalue} fieldValue={rol}>
                        <option value={""} className="bg-success" disabled >Seleccionar Rol</option>
                        <option value={"admin"}>Administrador</option>
                        <option value={"docente"}>Docente</option>
                        <option value={"alumno"}>Alumno</option>
                    </CustomSelect>
                </Row>
                {rol === "admin" ? <AdminFormInfo /> : rol === "docente" ? <DocenteFormInfo /> : rol === "alumno" ? <AlumnoFormInfo /> : ""}
            </CustomModal>
       </>
    );
};

export default ModalNewUser;