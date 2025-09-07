import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router";

const Register = () => {
    const { createUser, setProfile, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        createUser(email, password)
            .then((res) => {
                let user = res.user;
                setProfile(user, name)
                    .then(() => {
                        setLoading(false);
                        navigate('/');
                        console.log("registration successful..");
                    })
                    .catch(error => console.log(error.message))
            })
            .catch(error => console.log(error.message));
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="name" className="input" placeholder="Name" name="name" />

                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" name="email" />

                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" name="password" />

                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button type="submit" className="btn btn-neutral mt-4">register</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;