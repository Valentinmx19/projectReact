import { useForm } from "react-hook-form";
import Input from "../Input";


const DocenteFormInfo = () => {
    const {control} = useForm();

    return (
        <>
            <Input control={control} colSize="10" fieldName="Docente Info Aditional*" fieldType="text" name="department" fieldErrors="" fieldStyles="" />
        </>
    );
};

export default DocenteFormInfo;