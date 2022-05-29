import { useEffect, useState } from "react";
import UserList from "./components/user-list/user-list.component";

function App() {
  const [users, setUsers] = useState([]);
  const url = 'https://randomuser.me/api/?results=1000&seed=chalkboard&inc=name,dob'

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setUsers(data.results);
      })
  }, [])

  return (
    <div className="grid place-items-center">
      <h1 className="py-6 text-4xl">Birthdays</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;
