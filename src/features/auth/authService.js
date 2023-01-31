import axios from "../../axios";

// register user
const register = async (userData) => {
  const response = await axios.post("/register", userData);

  if (response.data) {
    // This will make our data persist even when we refresh
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// login user
const login = async (userData) => {
  const response = await axios.post("/login", userData);

  if (response.data) {
    // This will make our data persist even when we refresh
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// logout user
const logout = () => {
  localStorage.removeItem("user");
};

const getUser = async (id) => {
  const response = await axios.get(`/user/${id}`);

  return response.data;
};

const authService = {
  register,
  logout,
  login,
  getUser,
};

export default authService;
