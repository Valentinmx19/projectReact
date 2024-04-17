import { FC } from "react";
import { Link } from "react-router-dom";

type Semester = {
    title: string;
    medida: string;
    ruta: string;
}


const SemesterCard: FC<Semester> = ({title, medida, ruta }) => {

    return (
        <>
            <Link to={`:${ruta}`} className={`${medida} text-decoration-none btn mb-2 p-2 rounded-3 text-start`} >
                <h5 className="">{title}</h5>
            </Link>
        </>
    );
}

export default SemesterCard;