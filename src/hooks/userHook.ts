import { UserPost } from "../types/user";

export const userHook = () => {
    const postUser = async (data: UserPost) => {
        try {
            const dataJson = JSON.stringify(data);

            const response = await fetch("http://localhost:3000/api/v1/user", {
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

    const userSigin = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/v1/user/signin");
            const result = await response.json();

            return Promise.resolve(result);
        } catch (error) {
            return Promise.reject(error);
        }
    };
    
    const getUsers = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/v1/users");
            const result = await response.json();

            return Promise.resolve(result);
        } catch (error) {
            return Promise.reject(error);
        }
    };

    const getUser = async () => {};

    const updateUser = async () => {};

    const deleteUser = async () => {};

    return {
        postDataUser : postUser,
        userSignIn: userSigin,
        loadAllUser : getUsers,
        loadOneUser : getUser,
        postDataPutUser : updateUser,
        loadDeleteUser : deleteUser,
    }
};

