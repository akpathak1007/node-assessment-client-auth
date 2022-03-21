import axios from "./axios";

export const loginApi = async (body) => {
  const { data } = await axios.post("/user/signin", body);
  return data;
};

export const signupApi = async (body) => {
  console.log(body);
  const { data } = await axios.post("/user/signup", body);
  console.log(data);
  return data;
}
