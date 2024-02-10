import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author } = news;
    return (
        <Card className="mb-4">
            <Card.Header>
                <Image width={70} src={author.img} roundedCircle />
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length <= 200 ? <>{details}</> :
                            <>{details.slice(0, 200)}...
                                <Link to={`/news/${_id}`} className="text-warning">Read more</Link></>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default NewsCard;