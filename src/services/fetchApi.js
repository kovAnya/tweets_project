import axios from "axios";

axios.defaults.baseURL = "https://63b8aa5c6f4d5660c6dc1c51.mockapi.io";

export const getUsers = async () => {
  try {
    const { data } = await axios.get("/users");
    return data;
  } catch (error) {
    console.log(error);
  }
};
