import Input from "../Input";
import { useForm, SubmitHandler } from "react-hook-form";
import CustomModal from "../CustomModal";
import { FC, useEffect, useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
import { BasicPost, GetDataWithSelects, basicPost} from "../../types/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { carreerHook } from "../../hooks/carreerHook";
import { semesterHook } from "../../hooks/semesterHook";
import CustomSelect from "../CustomSelect";

type NewUserModalType = {
    show: boolean;
    onHide: () => void;
}

const ModalNewSemester: FC<NewUserModalType> = (props) => {
    const [validated, setValidated] = useState(false);
    const {loadAllCarreer} = carreerHook();
    const {postDataSemester} = semesterHook();
    const [carreers, setCarreers] = useState<GetDataWithSelects[]>([]);
    const [carreerId, setCarreerId] = useState("");

    const {control, handleSubmit, formState: {errors}} = useForm<BasicPost>({resolver: yupResolver(basicPost)});

    const onSubmit: SubmitHandler<BasicPost> = async (data) => {
        const carreer = Number(carreerId);
        const datos = {...data, carreer}
        setValidated(true)

        try {
            const res = await postDataSemester(datos);
            console.log(res);
        } catch (err) {
            console.log(err)
        }

        window.location.reload();
    }

    const loadDataAllCarreer = async () => {
        try{
            const dta = await loadAllCarreer();
            setCarreers(dta);
        }catch(err){console.log(err)}
    }

    const handleSelectvalue = (e:React.ChangeEvent<HTMLSelectElement>) => {
        let rolCurrent = e.target.options[e.target.selectedIndex].value;
        setCarreerId(rolCurrent);
    }

    useEffect(() => {
        loadDataAllCarreer().catch(null);
    }, [])

    return (
       <>
            <CustomModal onHide={props.onHide} show={props.show} modaltitle="Nuevo Cuatrimestre">
                <Form validated={validated} onSubmit={handleSubmit(onSubmit)} >
                    <Row className="mb-3 justify-content-center align-items-center">
                        <Input control={control} colSize="3" fieldName="Nombre*" fieldType="text" name="name" fieldErrors={errors.name?.message} fieldStyles="" />
                        <CustomSelect colSize="3" onChange={handleSelectvalue} fieldTitle="Seleccionar Carrera*" fieldValue={carreerId}>
                            <option value={""} className="text-black fw-semibold" disabled >Carreras</option>
                            {carreers?.map((carreer) => <option key={carreer.id} value={carreer.id}>{carreer.name}</option>)}
                        </CustomSelect>
                    </Row>
                    <Button type="submit" style={{display: "flex", float: 'right'}}>Enviar</Button>
                    <Button onClick={props.onHide} style={{display: "flex", float: 'right'}} variant="outline-dark me-2 bg-hover-secondary border-0">Cancelar</Button>
                </Form>
            </CustomModal>
       </>
    );
};

export default ModalNewSemester;