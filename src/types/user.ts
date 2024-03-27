import * as yup from "yup";

export const user = yup.object({
    username: yup.string().required('El campo es requerido'),
    password: yup.string().required('La constraseña es requerido'),
})

export type UserFormType = yup.InferType<typeof user>;

export type UserFormInputType = {
    control: UserFormType | any;
    name: string;
    fieldName: string;
    fieldType: string;
    fieldStyles: string;
    fieldErrors: string | undefined;
    colSize: string;
}
