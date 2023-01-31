import axios from "../../axios";

// get all reports
const getPosts = async () => {
  const response = await axios.get("/posts/get");
  return response.data;
};

const postService = {
  getPosts,
};

export default postService;
