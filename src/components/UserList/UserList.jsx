import { UserItem } from "../UserItem/UserItem";
import css from "./UserList.module.css";

export const UserList = ({ users }) => {
  return (
    <ul className={css.userlist}>
      {users.map((user) => {
        return (
          <UserItem
            key={user.id}
            imgUrl={user.avatar}
            username={user.user}
            tweetsNum={user.tweets}
            followersNum={user.followers}
          />
        );
      })}
    </ul>
  );
};
