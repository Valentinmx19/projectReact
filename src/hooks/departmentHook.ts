import { BasicPost } from "../types/user";

export const departmentHook = () => {
    const postDepartment = async (data: BasicPost) => {
        try{
            const dataJson = JSON.stringify(data);

            const response = await fetch("http://localhost:3000/api/v1/department", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: dataJson
            })
            const result = await response.json();

            return Promise.resolve(result);
        }catch(err){
            return Promise.reject(err);
        }
    };
    
    const getDepartments = async (params? :string) => {
        try{
            const response = await fetch(`http://localhost:3000/api/v1/departments${params ? `/${params}`: ""}`)
            const result = await response.json();

            return Promise.resolve(result);
        }catch(err){
            return Promise.reject(err);
        }
    };

    const updateDepartment = async () => {};

    const deleteDepartment = async () => {};

    return {
        postDataDepartment : postDepartment,
        loadAllDepartment : getDepartments,
        postDataPutDepartment : updateDepartment,
        loadDeleteDepartment : deleteDepartment,
    }
};