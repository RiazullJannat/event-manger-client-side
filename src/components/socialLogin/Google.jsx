import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Google = () => {
    const { google } = useContext(AuthContext);
    const handleGoogle = () => {
        google()
        .then(res=>{
            console.log(res);
        })
    }
    return (
        <div className="mx-auto my-2">
            <button className="btn " onClick={handleGoogle}>
                Google
            </button>
        </div>
    );
};

export default Google;