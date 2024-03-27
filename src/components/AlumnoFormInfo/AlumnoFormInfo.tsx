import { useForm } from "react-hook-form";
import Input from "../Input";

const AlumnoFormInfo = () => {
    const {control} = useForm();

    return (
        <>
            <Input control={control} colSize="10" fieldName="Alumno Info Aditional*" fieldType="text" name="department" fieldErrors="" fieldStyles="" />
        </>
    );
};

export default AlumnoFormInfo;