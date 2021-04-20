import { ACTION_TYPES } from "./types";
import {auth} from '../../firebase'
import { createUserProfileDocument } from '../../api';
export const readUser = () => ({
    type: ACTION_TYPES.READ_USER,
   
})
export const setCurrentUser = (user: any) => ({
    type: ACTION_TYPES.SET_USER,
    payload: user  
})


export const fetchUser = () => {
    return (dispatch:any) => {
        dispatch(readUser())
        try {
            auth.onAuthStateChanged(async userAuth => {
                if (userAuth) {
                  const userRef = await createUserProfileDocument(userAuth);            
                  userRef?.onSnapshot(snapShot => {
                    dispatch(setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                      }))
                  });
                }
            
                dispatch(setCurrentUser(userAuth))
              });
        } catch (error) {
            console.log(error.massage);
            
        }
    }
}