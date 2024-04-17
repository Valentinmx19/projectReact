import { BasicPost } from "../types/user";

export const subjectHook = () => {
    const postSubject = async (data: BasicPost) => {
        try {
            const dataJson = JSON.stringify(data);

            const response = await fetch("http://localhost:3000/api/v1/subject", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: dataJson
            })
            const resul = await response.json();

            return Promise.resolve(resul);
        } catch (error) {
            return Promise.reject(error);
        }
    };
    
    const getSubjects = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/v1/subjects");
            const result = await response.json();

            return Promise.resolve(result);
        } catch (error) {
            return Promise.reject(error);
        }
    };

    const getSubject = async () => {};

    const updateSubect = async () => {};

    const deleteSubject = async () => {};

    return {
        postDataSubject : postSubject,
        loadAllSubject : getSubjects,
        loadOneSubject : getSubject,
        postDataPutSubject : updateSubect,
        loadDeleteSubject : deleteSubject,
    }
};