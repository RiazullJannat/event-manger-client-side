import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="flex justify-center items-center min-h-screen bg-base-200 px-4">
            <div className="bg-neutral shadow-xl rounded-xl p-6 w-full max-w-sm text-center space-y-4">
                {/* Profile Picture */}
                <img
                    src={user?.photoURL || "https://i.ibb.co.com/BK6560f/user6.png"}
                    alt="Profile"
                    className="w-24 h-24 mx-auto rounded-full border-2 border-primary object-cover"
                />

                {/* Name */}
                <h2 className="text-xl font-bold text-white">{user?.displayName || "Anonymous User"}</h2>

                {/* Email */}
                <p className="text-white text-sm">{user?.email || "No email found"}</p>

                {/* Role */}
                <div className="badge badge-primary badge-outline px-4 py-2 text-sm text-white">
                    {user?.role || "User"}
                </div>
            </div>
        </div>
    );
};

export default Profile;