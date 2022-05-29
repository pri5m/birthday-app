import { Fragment } from "react";

const UserCard = ({ user }) => {
    const { name, dob } = user;

    return (
        <Fragment>
            <h2>{name.first}</h2>
            <p>{dob.date}</p>
        </Fragment>
    );
};

export default UserCard;