import { Button, ListGroup } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";

const RightNav = () => {
    return (
        <div>
            <div>
                <h3>Login with</h3>
                <Button className="mb-2" variant="outline-primary"><FaGoogle /> Login With Google</Button>
                <Button variant="outline-secondary"><FaGithub /> Login With GitHub</Button>
            </div>
            <div>
                <h3>Find Us On</h3>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default RightNav;