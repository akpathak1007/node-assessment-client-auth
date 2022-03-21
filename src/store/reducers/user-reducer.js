import {LOGIN} from '../../constents/action-constents'

const INITIAL = {
  auth: false
}
const userReducer = (state = INITIAL, action ) => {
  switch (action.type) {
    case LOGIN: {
      console.log(action);
      return {...state, auth: true, token: action.payload.token, data: action.payload.user}
    }
    default: {
      return INITIAL
    }
  }
}
export default userReducer;