import { Button, Form } from "react-bootstrap";
import Input from "../Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserFormType, user } from "../../types/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const HomeForm = () => {
    const [validated, setValidated] = useState(false);
    const onSubmit: SubmitHandler<UserFormType> = (data) => {
        console.log(data);
        setValidated(true)
    }

    const { control, handleSubmit, formState: {errors}} = useForm<UserFormType>({resolver: yupResolver(user)});


    return (
        <Form validated={validated} onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center border border-5 border-success p-4">
            <Input control={control} colSize="12" fieldName="Username*" name="username" fieldType="text" fieldErrors={errors.username?.message} fieldStyles="mb-3" />
            <Input control={control} colSize="12" fieldName="Password*" name="password" fieldType="password" fieldErrors={errors.password?.message} fieldStyles="mb-3" />

            <Button type="submit">Enviar</Button>
        </Form>
    );
};

export default HomeForm;