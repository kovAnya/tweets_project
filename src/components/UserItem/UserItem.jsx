import css from "./UserItem.module.css";
import { useState } from "react";
import { updateUser } from "../../services/fetchApi";

export const UserItem = ({ userData }) => {
  const [followed, setFollowed] = useState(false);

  const followHandler = () => {
    const incFlwNum = userData.followers + 1;
    updateUser({ ...userData, followers: incFlwNum });
    setFollowed(true);
  };

  const unFollowHandler = () => {
    const decFlwNum = userData.followers - 1;
    updateUser({ ...userData, followers: decFlwNum });
    setFollowed(false);
  };

  return (
    <li className={css.card}>
      <div className={css.avatar_thmb}>
        <img
          className={css.avatar}
          src={userData.avatar}
          alt={userData.user}
          width="80"
        />
      </div>

      <ul>
        <li className={css.card_info}>
          <span>{userData.tweets}</span> tweets
        </li>
        <li className={css.card_info}>
          <span>{userData.followers}</span> followers
        </li>
      </ul>
      {followed ? (
        <button
          className={`${css.card_btn} ${css.followed}`}
          onClick={unFollowHandler}
        >
          following
        </button>
      ) : (
        <button className={css.card_btn} onClick={followHandler}>
          follow
        </button>
      )}
    </li>
  );
};
