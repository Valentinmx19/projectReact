import { Col, Container, Row , Image} from "react-bootstrap";
import HomeForm from "../../components/HomeForm";
import video from "../../assets/Programacion web gratis con w3schools(720P_HD).mp4";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Container fluid="xxl">
            <Row style={{height: '100vh'}} >
                <Col style={{backgroundColor: '#555', borderRadius: '10% / 0% 60% 60% 0%', overflow:'hidden'}}>
                    <video width='100%' height='100%' style={{transform:'scale(1.1)'}} loop>
                        <source src={video} type="video/mp4" />
                    </video>
                </Col>
                <Col sm='4' className="d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <Image src="https://utsh.edu.mx/wp-content/uploads/2021/01/member-1.jpg" width="150px" className="mb-3" />
                    </div>
                    <HomeForm />
                    <Link to={"/administrator"}>Admin Screen</Link>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;