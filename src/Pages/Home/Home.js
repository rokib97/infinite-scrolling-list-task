import { useEffect, useState } from "react";
import UserInfo from "./UserInfo";

const Home = () => {
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=10`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
      });
  }, []);
  return (
    <div className="mt-8 lg:px-12">
      <h1 className="text-3xl text-center">User Informations</h1>
      {users &&
        users.map((user, index) => <UserInfo user={user} key={index} />)}
    </div>
  );
};

export default Home;
