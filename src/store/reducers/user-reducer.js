import { LOGIN, LOG_OUT, SIGN_UP } from "../../constents/action-constents";

const INITIAL = {
  auth: false,
};
const userReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        auth: true,
        token: action.payload.token,
        data: action.payload.user,
      };
    }
    case SIGN_UP: {
      const data = action.payload.date;
      console.log(data);
      return { ...state, auth: true, token: data.token, data: data.user };
    }
    case LOG_OUT: {
      return INITIAL;
    }
    default: {
      return INITIAL;
    }
  }
};
export default userReducer;
