import { UserItem } from "../UserItem/UserItem";
import css from "./UserList.module.css";

export const UserList = ({ users, onClick, followedArr }) => {
  return (
    <ul className={css.userlist}>
      {users.map((user) => {
        return (
          <UserItem
            key={user.id}
            userData={user}
            onClick={onClick}
            followed={followedArr}
          />
        );
      })}
    </ul>
  );
};
