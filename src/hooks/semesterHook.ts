import { BasicPost, UserPost } from "../types/user";

export const semesterHook = () => {
    const postSemester = async (data: BasicPost) => {
        try {
            const dataJson = JSON.stringify(data);

            const response = await fetch("http://localhost:3000/api/v1/semester", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: dataJson
            })   
            const result = await response.json();

            return Promise.resolve(result);
        } catch (error) {
            return Promise.reject(error);
        }
    };
    
    const getSemesters = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/v1/semesters");
            const result = await response.json();

            return Promise.resolve(result);
        } catch (error) {
            return Promise.reject(error)
        }
    };

    const getSemester = async () => {};

    const updateSemester = async () => {};

    const deleteSemester = async () => {};

    return {
        postDataSemester : postSemester,
        loadAllSemester : getSemesters,
        loadOneSemester : getSemester,
        postDataPutSemester : updateSemester,
        loadDeleteSemester : deleteSemester,
    }
};