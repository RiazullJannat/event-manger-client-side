import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../providers/AuthProvider";

export const useRole = () => {
    const [role, setRole] = useState(null);
    const [rLoading, setRLoading] = useState(true);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        if (user && user?.email) {
            fetch(`http://localhost:5000/role?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setRole(data.role);
                    setRLoading(false);
                });
        }
    }, [user, user?.email]);
    return [role, rLoading];
}