export const addToStorage = (id) => {
  const followedArray = JSON.parse(localStorage.getItem("followedIds")) || [];
  followedArray.push(id);
  localStorage.setItem("followedIds", JSON.stringify(followedArray));
};

export const deleteFromStorage = (id) => {
  const followedArray = JSON.parse(localStorage.getItem("followedIds"));
  const index = followedArray.indexOf(id);
  followedArray.splice(index, 1);
  localStorage.setItem("followedIds", JSON.stringify(followedArray));
};

export const getFollowed = () => {
  const followedArray = JSON.parse(localStorage.getItem("followedIds")) || [];
  return followedArray;
};
