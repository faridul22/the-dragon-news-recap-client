
import Header from "../pages/Home/Shared/Header/Header";
import Footer from "../pages/Home/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../pages/Home/Shared/LeftNav/LeftNav";
import RightNav from "../pages/Home/Shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Home/Shared/NavigationBar/NavigationBar";


const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;