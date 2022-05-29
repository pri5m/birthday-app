import { Fragment } from "react";
import UserCard from "../user-card/user-card.component";

const UserList = ({ users }) => (
    <Fragment>
        {users.map((user) => {
            return <UserCard user={user} />;
        })}
    </Fragment>
);

export default UserList;