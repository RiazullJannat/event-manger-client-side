import { useParams } from "react-router";

const RegisterEvent = () => {
    const {id}  = useParams();
    console.log(id);
    return (
        <div>
            register to an event.....
        </div>
    );
};

export default RegisterEvent;