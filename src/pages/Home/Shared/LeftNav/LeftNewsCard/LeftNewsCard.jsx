import { Card, Col, Row } from "react-bootstrap";
import picture1 from '../../../../../assets/1.png'
import picture2 from '../../../../../assets/2.png'
import picture3 from '../../../../../assets/3.png'

const LeftNewsCard = () => {
    return (
        <Row xs={1} md={1} lg={1} className="g-4 mt-2">
            <Col>
                <Card>
                    <Card.Img variant="top" src={picture1} />
                    <Card.Body>
                        <Card.Title>This is a longer card with supporting text below as a natural</Card.Title>

                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={picture2} />
                    <Card.Body>
                        <Card.Title>This is a longer card with supporting text below as a natural</Card.Title>

                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={picture3} />
                    <Card.Body>
                        <Card.Title>This is a longer card with supporting text below as a natural</Card.Title>

                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default LeftNewsCard;