import Input from "../Input";
import { useForm, SubmitHandler } from "react-hook-form";
import CustomModal from "../CustomModal";
import { FC, useEffect, useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
import { BasicPost, UserPost, userPost } from "../../types/user";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomSelect from "../CustomSelect";
import { GroupHook } from "../../hooks/groupHook";
import { userHook } from "../../hooks/userHook";

type NewUserModalType = {
    show: boolean;
    onHide: () => void;
}

const ModalNewGroup: FC<NewUserModalType> = (props) => {
    const [validated, setValidated] = useState(false);
    const [teacherId, setTeacherId] = useState("");
    const [teachers, setTeachers] = useState<UserPost[]>([]);
    const {postDataGroup} = GroupHook();
    const {loadAllUser} = userHook();

    const onSubmit: SubmitHandler<BasicPost> = async (data) => {
        const teacher = Number(teacherId);
        const datos = {...data, teacher};

        setValidated(true)

        try {
            const res = await postDataGroup(datos);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    const {control, handleSubmit, formState: {errors}} = useForm<UserPost>({resolver: yupResolver(userPost)});

    const handleSelectvalue = (e:React.ChangeEvent<HTMLSelectElement>) => {
        let rolCurrent = e.target.options[e.target.selectedIndex].value;
        setTeacherId(rolCurrent);
    }

    const loadDataAllTeachers = async () => {
        try {
            const res = await loadAllUser();
            setTeachers(res);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadDataAllTeachers().catch(null);
    }, [])

    return (
       <>
            <CustomModal onHide={props.onHide} show={props.show} modaltitle="Nuevo Grupo">
                <Form validated={validated} onSubmit={handleSubmit(onSubmit)} >
                    <Row className="mb-3 justify-content-center align-items-center">
                        <Input control={control} colSize="3" fieldName="Nombre*" fieldType="text" name="name" fieldErrors={errors.name?.message} fieldStyles="" />
                        <CustomSelect colSize="3" onChange={handleSelectvalue} fieldTitle="Seleccionar Cuatrimestre*" fieldValue={teacherId}>
                            <option value={""} className="text-black fw-semibold" disabled >Cuatrimestre</option>
                            {teachers?.map((teacher) => <option key={teacher.id} value={teacher.id}>{teacher.name}</option>)}
                        </CustomSelect>
                    </Row>
                    <Button type="submit" style={{display: "flex", float: 'right'}}>Enviar</Button>
                    <Button onClick={props.onHide} style={{display: "flex", float: 'right'}} variant="outline-dark me-2 bg-hover-secondary border-0">Cancelar</Button>
                </Form>
            </CustomModal>
       </>
    );
};

export default ModalNewGroup;