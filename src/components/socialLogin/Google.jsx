import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router";

const Google = () => {
    const { google, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogle = () => {
        google()
            .then(res => {
                const user = {
                    name: res.user.displayName,
                    email: res.user.email,
                    photo: res.user.photoURL,
                    role: "user"
                };
                fetch("https://event-manager-server-kappa.vercel.app/register", {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            setLoading(false);
                            navigate('/');
                            alert("registration successful.");
                        }
                        else {
                            alert("login successful");
                        }
                    });
            })
            .catch(error => {
                console.error("Google sign-in error:", error.message);
            });
    };
    return (
        <div className="mx-auto my-2">
            <button className="btn " onClick={handleGoogle}>
                Google
            </button>
        </div>
    );
};
export default Google;