import { BasicPost } from "../types/user";

export const carreerHook = () => {
    const postCarreer = async (data: BasicPost) => {
        try{
            const dataJson = JSON.stringify(data);

            const response = await fetch("http://localhost:3000/api/v1/carreer", {
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
    
    const getCarreers = async (params? : string) => {
        try{
            const response = await fetch(`http://localhost:3000/api/v1/carreers${params ? `/${params}`: ""}`)
            const result = await response.json();

            return Promise.resolve(result);
        }catch(err){
            return Promise.reject(err);
        }
    };

    const updateCarreer = async () => {};

    const deleteCarreer = async () => {};

    return {
        postDataCarreer : postCarreer,
        loadAllCarreer : getCarreers,
        postDataPutCarreer : updateCarreer,
        loadDeleteCarreer : deleteCarreer,
    }
};