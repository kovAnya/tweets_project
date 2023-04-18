import { UserItem } from "../../components/UserItem/UserItem";
import { useState, useEffect } from "react";
import { getUsers } from "../../services/fetchApi";
import { UserList } from "../../components/UserList/UserList";

const Tweets = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return <UserList users={users} />;
};
export default Tweets;
