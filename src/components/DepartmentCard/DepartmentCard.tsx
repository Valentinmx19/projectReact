import { FC } from "react";
import { Link } from "react-router-dom";

type Department = {
    title: string;
    director: string;
    medida: string;
    ruta: string;
}


const DepartmentCard: FC<Department> = ({title, director, medida, ruta }) => {

    return (
        <>
            <Link to={ruta} className={`${medida} text-decoration-none btn mb-2 p-2 rounded-3 text-start`} >
                <h5 className="">{title}</h5>
                <h6 className="" >Director: {director}</h6>
            </Link>
        </>
    );
}

export default DepartmentCard;