import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
    return (
        <Container >
            <h4 className="text-center text-danger border py-2 my-3 border-danger rounded-2 w-50 mx-auto">Dragon news Terms & Conditions</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At eligendi adipisci, excepturi explicabo in autem sequi ut obcaecati dolore architecto nostrum dolor harum error iusto nisi, beatae alias quos quibusdam ipsum provident? Obcaecati voluptatum harum quasi perferendis error? Reprehenderit laborum, aperiam voluptatem officiis atque commodi, culpa enim, aut architecto aliquid quaerat dicta. Amet excepturi saepe reprehenderit architecto, quidem repellendus, voluptate distinctio repudiandae maiores possimus alias accusantium expedita voluptates fugit impedit exercitationem pariatur? Beatae consequatur, magni minima eos excepturi quod aut sit reiciendis aperiam, nobis itaque iste impedit doloremque debitis! Provident aspernatur quidem iure quia eum sapiente facere enim nostrum voluptatem.</p>
            <p className="text-center mx-auto">GoBack <Link to="/register">Register</Link></p>
        </Container>
    );
};

export default Terms;