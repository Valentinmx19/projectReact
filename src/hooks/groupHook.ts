import { BasicPost } from "../types/user";


export const GroupHook = () => {
    const postGroup = async (data: BasicPost) => {
        try {
            const dataJson = JSON.stringify(data);

            const response = await fetch("http://localhost:3000/api/v1/group", {
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
    
    const getGroups = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/v1/groups");
            const result = await response.json();

            return Promise.resolve(result);
        } catch (error) {
            return Promise.reject(error);
        }
    };

    const getGroup = async () => {};

    const updateGroup = async () => {};

    const deleteGroup = async () => {};

    return {
        postDataGroup : postGroup,
        loadAllGroup : getGroups,
        loadOneGroup : getGroup,
        postDataPutGroup : updateGroup,
        loadDeleteGroup : deleteGroup,
    }
};