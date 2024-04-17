import { Button, Form } from "react-bootstrap";
import Input from "../Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserFormType, user } from "../../types/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Link } from "react-router-dom";

const HomeForm = () => {
    const [validated, setValidated] = useState(false);
    const onSubmit: SubmitHandler<UserFormType> = (data) => {
        console.log(data);
        setValidated(true)
    }

    const { control, handleSubmit, formState: {errors}} = useForm<UserFormType>({resolver: yupResolver(user)});


    return (
        <>
            <Form validated={validated} onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center border border-1 border-secondary p-4 rounded">
                <Input control={control} colSize="12" fieldName="Username*" name="username" fieldType="text" fieldErrors={errors.username?.message} fieldStyles="mb-3" />
                <Input control={control} colSize="12" fieldName="Password*" name="password" fieldType="password" fieldErrors={errors.password?.message} fieldStyles="" />

                <Button type="submit" className="mb-2 mt-3">Iniciar Sesión</Button>
                <Link className="btn btn-outline-dark border border-0" to={"/signin"}>Registrarse</Link>
            </Form>
        </>
    );
};

export default HomeForm;