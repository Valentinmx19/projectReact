import * as yup from "yup";

export const user = yup.object({
    username: yup.string().required('El campo es requerido'),
    password: yup.string().required('La constraseña es requerido'),
})

export type UserFormType = yup.InferType<typeof user>;

export const userPost = yup.object ({
  id: yup.string(),
  matricula : yup.string().required("La matricula es requerido"),
  password : yup.string().required("La contraseña es requerido"),
  name : yup.string().required("El nombre es requerido"),
  firstname : yup.string().required("El apellido parterno es requerido"),
  lastname : yup.string().required("El apellido materno es requerido"),
  age : yup.number().required("La edad es requerido"),
  email : yup.string().required("El correo es requerido").email("El campo debe contener un email válido"),
  numberphone : yup.number().required("El numero de teléfono es requerido").min(10, "Debe contener 10 caracteres"),
  rol: yup.string()
})

export type UserPost = yup.InferType<typeof userPost>

// export type UserPostForm = yup.InferType<typeof userPost>

// export type UserPostForm = {
//   id: string;
//   matricula : string;
//   password : string;
//   name : string;
//   firstname : string;
//   lastname : string;
//   age : number;
//   email : string;
//   numberphone : number;
//   rol: string;
// };

export type UserFormInputType = {
    control: UserFormType | any;
    name: string;
    fieldName: string;
    fieldType: string;
    fieldStyles: string;
    fieldErrors: string | undefined;
    colSize: string;
    readonly?: boolean;
}

export const basicPost = yup.object({
  name : yup.string().required("El nombre es requerido")
})

export type BasicPost = yup.InferType<typeof basicPost>

export type GetDataWithSelects = {
  name: string;
  id: number;
}