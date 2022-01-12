import React, {useEffect, useState} from "react";
import UserCard from "../../components/UserCard/UserCard";


const Users = () => {
  const [users, setUsers] = useState([]);
  let [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then(res => res.json())
      .then(users => setUsers(users.data))
      .catch(error => console.log(error));
  }, [page]);


  const userList = users.map((user, i) => (
    <UserCard
      email={user.email}
      first_name={user.first_name}
      last_name={user.last_name}
      key={i}
    />
  ));

  const nextPageHandler = () => {
    setPage(page + 1)
  }

  const previousPageHandler = () => {
    setPage(page - 1)
  }


  return (
    <div className="user-page">
      <button onClick={nextPageHandler}>Next page</button>
      <button onClick={previousPageHandler}>Previous page</button>
      <h2>Page:{page}</h2>
      <div className="user-page__user-list">
        {userList}
      </div>
    </div>
  );
}

export default Users;
