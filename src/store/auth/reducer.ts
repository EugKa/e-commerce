import { ACTION_TYPES } from "./types";
export interface userState {
    currentUser:any
}
const INITIAL_STATE = {
  currentUser: null
  };
  
  const userReducer = (state:userState = INITIAL_STATE, {type, payload}: any) => {
    switch (type) {
      case ACTION_TYPES.SET_USER:
        return {
          ...state,
          currentUser: payload
        };
      default:
        return state;
    }
  };
  
  export default userReducer;