import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, name)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User created successful",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log(error);
            })

    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-header text-center">
                            <h2>Register</h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-2">
                                    <label htmlFor="inputName">Your full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        id="inputName"
                                        placeholder="Your full name"
                                        required
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="inputEmail1">Email address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        id="inputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                        required
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="inputPassword1">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        id="inputPassword1"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-danger w-100">
                                        Register
                                    </button>
                                </div>
                                <p>
                                    <small> Already have an account? Please <Link to="/login">Login</Link></small>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;