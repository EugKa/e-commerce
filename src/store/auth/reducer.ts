import { ACTION_TYPES } from "./types";
export interface userState {
  currentUser:any;
  error:any
}
const INITIAL_STATE = {
  currentUser: null,
  error: null
  };
  
  const userReducer = (state:userState = INITIAL_STATE, {type, payload}: any) => {
    switch (type) {
      case ACTION_TYPES.SIGN_IN_SUCCESS:
        return {
          ...state,
          currentUser: payload,
          error: null
        };
      case ACTION_TYPES.SIGN_OUT_SUCCESS:
        return {
          ...state,
          currentUser:null,
          error:null
        }  
      case ACTION_TYPES.SIGN_IN_FAILURE:
      case ACTION_TYPES.SIGN_OUT_FAILURE:
      case ACTION_TYPES.SIGN_UP_FAILURE:
        return {
          ...state,
          error: payload
        }
      default:
        return state;
    }
  };
  
  export default userReducer;