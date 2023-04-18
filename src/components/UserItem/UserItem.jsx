import css from "./UserItem.module.css";
import { useState, useEffect } from "react";
import { updateUser } from "../../services/fetchApi";
import { addToStorage, deleteFromStorage } from "../../services/localStorage";

export const UserItem = ({ userData, onClick, followed }) => {
  const followHandler = async () => {
    const incFlwNum = userData.followers + 1;
    await updateUser({ ...userData, followers: incFlwNum });
    addToStorage(userData.id);
    onClick();
  };

  const unFollowHandler = async () => {
    const decFlwNum = userData.followers - 1;
    await updateUser({ ...userData, followers: decFlwNum });
    deleteFromStorage(userData.id);
    onClick();
  };

  const formattedFlw = new Intl.NumberFormat("en-US").format(
    userData.followers
  );
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
          <span>{formattedFlw}</span> followers
        </li>
      </ul>
      {followed.includes(userData.id) ? (
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
