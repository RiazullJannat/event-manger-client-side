import { NavLink } from "react-router";

const NotFound = () => {
    return (
        <div>
            <h1 className="text-red-600" >Not found...</h1>
            <NavLink to={'/'} className={'btn-primary btn'}>Back to home</NavLink>
        </div>
    );
};

export default NotFound;