import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useRole } from "../../customHooks/useRole";
import { Navigate } from "react-router";

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [role, rLoading] = useRole();
    if (loading || rLoading)
        return <span className="loading loading-spinner text-accent"></span>;
    if (user && role === 'admin')
        return children;
    return <Navigate to={'/login'} />
};

export default AdminRoute;