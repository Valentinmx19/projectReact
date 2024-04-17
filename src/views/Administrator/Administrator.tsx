import { Nav } from "react-bootstrap";
import NavNavigation from "../../components/NavNavigation";
import { Link, Outlet } from "react-router-dom";

const styleNavLink = "fw-medium link-light link-opacity-75-hover me-3 text-decoration-none"

const Administrator = () => {

    return (
       <>
            <NavNavigation>
                <Nav >
                    <Link to="department" className={styleNavLink} >Departamentos</Link>
                    <Link to="career" className={styleNavLink} >Carreras</Link>
                    <Link to="semester" className={styleNavLink} >Cuatrimestres</Link>
                    <Link to="subject" className={styleNavLink} >Materias</Link>
                    <Link to="group" className={styleNavLink} >Grupos</Link>
                    <Link to="users" className={styleNavLink} >Usuarios</Link>
                 </Nav>
            </NavNavigation>
            <Outlet />
       </> 
    );
};

export default Administrator;