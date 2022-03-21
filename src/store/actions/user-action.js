
import { loginApi } from "../../api/user-api";
import { LOGIN } from "../../constents/action-constents";

export const login = (credentials) => async (dispatch) => {
  const data = await loginApi(credentials);
  dispatch({ type: LOGIN, payload: data });
  return null;
};
