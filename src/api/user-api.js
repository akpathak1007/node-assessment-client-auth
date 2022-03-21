import axios from "./axios";

export const loginApi = async (body) => {
  const { data } = await axios.post("/user/signin", body);
  return data;
};
