import { Fragment } from "react";
import Avatar from "react-avatar";

const UserCard = ({ user }) => {
    const { name, dob } = user;
    const fullname = name.first + ' ' + name.last;

    return (
        <div className='grid col-8 gap-2 px-6 py-2 my-1 bg-slate-100 rounded-md'>
            <Avatar name={fullname} size="50" textSizeRatio={0.5} round={true} />
            <div className="col-start-2 col-span-5">
                <h2 className="font-bold">{name.first}</h2>
                <p>{dob.date}</p>
            </div>
        </div>
    );
};

export default UserCard;