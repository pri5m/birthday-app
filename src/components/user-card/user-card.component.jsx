import { Fragment } from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { useDateFormatter } from "../../hooks/useDateFormatter";

const UserCard = ({ user }) => {
    const { name, dob } = user;
    const date = useDateFormatter(dob.date);
    const fullname = name.first + ' ' + name.last;

    return (
        <Link to='/details' state={{ data: { fullname, dob } }}>
            <div className='grid col-8 gap-2 px-6 py-2 my-1 bg-slate-100 rounded-md'>
                <Avatar name={fullname} size="50" textSizeRatio={0.5} round={true} />
                <div className="col-start-2 col-span-5">
                    <h2 className="font-bold">{fullname}</h2>
                    <p>{date}</p>
                </div>
            </div>
        </Link>
    );
};

export default UserCard;