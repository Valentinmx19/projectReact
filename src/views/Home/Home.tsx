import { Col, Container, Row , Image} from "react-bootstrap";
import HomeForm from "../../components/HomeForm";
import { Link } from "react-router-dom";
import logoApp from "../../assets/logo.jpg";
import "./home.css";

const imageUtsh = "https://www.eduopinions.com/wp-content/uploads/2017/09/Universidad-Tecnol%C3%B3gica-de-la-Sierra-Hidalguense-UTSH-campus-610x296.jpg";
const imageInfoUtsh = "https://st.mextudia.com/wp-content/uploads/2022/07/Logo-UTSH.jpg";

const Home = () => {
    return (
        <Container fluid="xxl">
            <Row style={{height: '100vh'}} >
                <Col className="d-flex align-items-center p-0" style={{backgroundColor: '#555', borderRadius: '10% / 0% 60% 60% 0%', overflow:'hidden'}}>
                    {/* <Image className="mb-3" src={imageInfoUtsh} height={"20%"} /> */}
                    <Image className="" src={imageUtsh} height={"70%"} />
                </Col>
                <Col sm='4' className="d-flex flex-column align-items-center justify-content-center">
                    <div className="mb-3">
                        <Image src={logoApp} width="200px" className="rounded-circle"/>
                    </div>
                    <HomeForm />
                    <Link to={"administrator/department"}>Admin Screen</Link>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;