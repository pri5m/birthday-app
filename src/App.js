import arraySort from "array-sort";
import { useEffect, useState } from "react";
import Spinner from "./components/spinner/spinner.component";
import UserList from "./components/user-list/user-list.component";
import { useFetch } from "./hooks/useFetch";

function App() {
  const url = 'https://randomuser.me/api/?results=1000&seed=chalkboard&inc=name,dob,login'
  const [orderedUsers, setOrderedUsers] = useState([]);
  const { data, error, isLoading } = useFetch(url);

  useEffect(() => {
    // @ts-ignore
    const results = data.results;
    setOrderedUsers(arraySort(results, 'name.first'));
  }, [data])

  return (
    <div className="grid place-items-center">
      <h1 className="py-6 text-4xl" role="home-title">Birthdays</h1>
      {error && <div className='my-8'>{error}</div>}
      {isLoading
        ? <Spinner />
        : <UserList users={orderedUsers} />
      }
    </div>
  );
}

export default App;