import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Career = () => {
    return (
        <div className="text-center mt-5">
            <h3>Career information coming soon</h3>
            <Link to="/"><Button variant="danger">Go Back Home</Button></Link>
        </div>
    );
};

export default Career;