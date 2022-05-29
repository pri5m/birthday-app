import { Link } from "react-router-dom";

const HomeButton = () => (
    <Link to='/'>
        <button className="py-3 px-12 my-4 rounded-md bg-slate-800 text-white">Back to home</button>
    </Link>
);
export default HomeButton;