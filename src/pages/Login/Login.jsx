import { Link } from "react-router-dom";


const Login = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-header text-center">
                            <h2>Login</h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
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
                                        Login
                                    </button>
                                </div>
                                <p>
                                    <small> New to Dragon News? Please <Link to="/register"> Create an account</Link></small>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
