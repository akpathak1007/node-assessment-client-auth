
import { loginApi, signupApi } from "../../api/user-api";
import { LOGIN, SIGN_UP, LOG_OUT } from "../../constents/action-constents";

export const login = (credentials) => async (dispatch) => {
  const data = await loginApi(credentials);
  dispatch({ type: LOGIN, payload: data });
  return null;
};

export const logout = () => {
  return {
    type: LOG_OUT
  }
};

export const signup = (credentials) => async (dispatch)=>{
  const data = await signupApi(credentials);
  dispatch({type: SIGN_UP, payload: data});
  return;
}
