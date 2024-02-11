import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const About = () => {
    return (
        <div className="text-center mt-5">
            <h3>About information coming soon</h3>
            <Link to="/"><Button variant="danger">Go Back Home</Button></Link>
        </div>
    );
};

export default About;