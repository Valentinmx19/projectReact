import { useForm } from "react-hook-form";
import Input from "../Input";

const AdminFormInfo = () => {
    const {control} = useForm();

    return (
        <>
            <Input control={control} colSize="10" fieldName="Admin Info Aditional*" fieldType="text" name="department" fieldErrors="" fieldStyles="" />
        </>
    );
};

export default AdminFormInfo;