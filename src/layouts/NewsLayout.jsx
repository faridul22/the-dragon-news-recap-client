import Header from "../pages/Home/Shared/Header/Header";
import Footer from "../pages/Home/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../pages/Home/Shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}>
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

export default NewsLayout;