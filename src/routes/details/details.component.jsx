import Avatar from "react-avatar";
import { useLocation } from "react-router-dom";
import HomeButton from "../../components/home-button/home-button";

const Details = () => {
    const location = useLocation();
    // @ts-ignore
    const user = location.state?.data;
    return (
        <div className="grid place-items-center">
            <Avatar className="mt-10 mb-4" name={user.fullname} size="150" textSizeRatio={0.5} round={true} />
            <p className="mt-10 text-4xl">{user.fullname}</p>
            <p className="mt-4 mb-12 text-2xl italic">{user.dob.age} years old</p>
            <HomeButton />
        </div>
    );
}

export default Details;