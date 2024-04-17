import Input from "../Input";
import { useForm, SubmitHandler } from "react-hook-form";
import CustomModal from "../CustomModal";
import { FC, useEffect, useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
import { BasicPost, GetDataWithSelects, basicPost } from "../../types/user";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomSelect from "../CustomSelect";
import { semesterHook } from "../../hooks/semesterHook";
import { subjectHook } from "../../hooks/subjectHook";

type NewUserModalType = {
    show: boolean;
    onHide: () => void;
}

const ModalNewSubject: FC<NewUserModalType> = (props) => {
    const [validated, setValidated] = useState(false);
    const [semesterId, setSemesterId] = useState("");
    const [semesters, setSemesters] = useState<GetDataWithSelects[]>([]);
    const {loadAllSemester} = semesterHook();
    const {postDataSubject} = subjectHook();

    const {control, handleSubmit, formState: {errors}} = useForm<BasicPost>({resolver: yupResolver(basicPost)});

    const handleSelectvalue = (e:React.ChangeEvent<HTMLSelectElement>) => {
        let rolCurrent = e.target.options[e.target.selectedIndex].value;
        setSemesterId(rolCurrent);
    }

    const onSubmit: SubmitHandler<BasicPost> = async (data) => {
        const semester = Number(semesterId);
        const datos = {...data, semester};

        setValidated(true)

        try {
            const res = await postDataSubject(datos);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
        window.location.reload()
    }

    const loadDataAllSemesters = async () => {
        try {
            const res = await loadAllSemester();
            setSemesters(res);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadDataAllSemesters().catch(null);
    }, [])

    return (
       <>
            <CustomModal onHide={props.onHide} show={props.show} modaltitle="Nueva Materia">
                <Form validated={validated} onSubmit={handleSubmit(onSubmit)} >
                    <Row className="mb-3 justify-content-center align-items-center">
                        <Input control={control} colSize="3" fieldName="Nombre*" fieldType="text" name="name" fieldErrors={errors.name?.message} fieldStyles="" />
                        <CustomSelect colSize="3" onChange={handleSelectvalue} fieldTitle="Seleccionar Cuatrimestre*" fieldValue={semesterId}>
                            <option value={""} className="text-black fw-semibold" disabled >Cuatrimestre</option>
                            {semesters?.map((semester) => <option key={semester.id} value={semester.id}>{semester.name}</option>)}
                        </CustomSelect>
                    </Row>
                    <Button type="submit" style={{display: "flex", float: 'right'}}>Enviar</Button>
                    <Button onClick={props.onHide} style={{display: "flex", float: 'right'}} variant="outline-dark me-2 bg-hover-secondary border-0">Cancelar</Button>
                </Form>
            </CustomModal>
       </>
    );
};

export default ModalNewSubject;