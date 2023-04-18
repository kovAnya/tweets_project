import { UserItem } from "../../components/UserItem/UserItem";
import { useState, useEffect } from "react";
import { getUsers } from "../../services/fetchApi";
import { UserList } from "../../components/UserList/UserList";
import { getFollowed } from "../../services/localStorage";

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [followedArr, setFollowedArr] = useState([]);

  useEffect(() => {
    setFollowedArr(getFollowed());
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, [followedArr]);

  const onClick = () => {
    setFollowedArr(getFollowed());
  };

  return <UserList users={users} onClick={onClick} followedArr={followedArr} />;
};
export default Tweets;
