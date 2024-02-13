import { Button, ListGroup } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";
import QZone from "../QZone/QZone";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import Swal from "sweetalert2";

const RightNav = () => {

    const { googleSignIn, githubSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User Created With Google successful",
                    showConfirmButton: false,
                    timer: 2000
                });
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User Created With GitHub successful",
                    showConfirmButton: false,
                    timer: 2000
                });
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div>
                <h3>Login with</h3>
                <Button onClick={handleGoogleSignIn} className="mb-2" variant="outline-primary">
                    <FaGoogle /> Login With Google
                </Button>

                <Button onClick={handleGithubSignIn} variant="outline-secondary">
                    <FaGithub /> Login With GitHub
                </Button>
            </div>
            <div>
                <h3>Find Us On</h3>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
        </div>
    );
};

export default RightNav;