import moment from "moment";
import { Card, Image } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaShareFromSquare } from "react-icons/fa6";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news;
    return (
        <Card className="mb-4">
            <Card.Header className="d-flex align-items-center">
                <Image width={40} height={40} src={author.img} roundedCircle />
                <div className="ps-2 flex-grow-1">
                    <p className="mb-0">{author?.name}</p>
                    <p className="mb-0"><small>{moment(author.published_date).format("yyyy-mm-d")}</small></p>
                </div>
                <div>
                    <FaRegBookmark /> <FaShareFromSquare />
                </div>
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
            <Card.Footer className="text-muted d-flex align-items-center">
                <div className="flex-grow-1 d-flex">
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={rating.number}
                        readOnly />
                    <span className="ms-1">{rating.number}</span>
                </div>
                <div>
                    <p><FaEye /> {total_view}</p>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;