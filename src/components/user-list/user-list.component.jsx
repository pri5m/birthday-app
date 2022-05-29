import { Fragment } from "react";
import UserCard from "../user-card/user-card.component";

const UserList = ({ users }) => (
    <div className='p-5 bg-slate-300 rounded-md'>
        {users.map((user) => {
            return <UserCard user={user} />;
        })}
    </div>
);

export default UserList;