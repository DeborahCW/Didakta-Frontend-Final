import axios from "axios";

export const register = async (userData) => {
  try {
    const { successData } = await axios.post(
      "http://localhost:4000/user/register",
      {
        first: userData.first,
        last: userData.last,
        email: userData.email,
        password: userData.password,
      }
    );
    console.log("Successfully registered");
    return successData;
  } catch (err) {
    console.log(err);
  }
};

export const login = (user) => {
  return axios
    .post("http://localhost:4000/user/login", {
      email: user.email,
      password: user.password,
    })
    .then((res) => {
      // console.log(res.headers.get('auth-token'))
      localStorage.setItem("usertoken", res.data); // sets a usertoken into the localstorage coming from res.data
      return res.data;
    })
    .catch((err) => console.error(err));
};
