import arraySort from "array-sort";
import { useEffect, useState } from "react";
import Spinner from "./components/spinner/spinner.component";
import UserList from "./components/user-list/user-list.component";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const url = 'https://randomuser.me/api/?results=1000&seed=chalkboard&inc=name,dob,login'

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const orderedUsers = arraySort(data.results, 'name.first');
        setUsers(orderedUsers);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        setError(error);
      })
  }, [])

  return (
    <div className="grid place-items-center">
      <h1 className="py-6 text-4xl">Birthdays</h1>
      {error && <div className='my-8'>{error}</div>}
      {isLoading
        ? <Spinner />
        : <UserList users={users} />
      }
    </div>
  );
}

export default App;