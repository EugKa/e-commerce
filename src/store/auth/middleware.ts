import {auth} from '../../firebase'
import { createUserProfileDocument } from '../../api';
import { ACTION_TYPES } from './types';
import { subscribe } from '../../utils/redux';
import { setCurrentUser } from './actions';

const CurrentUserWorker: any = ({dispatch}: {dispatch: any}) => {
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
  };
  
  const CurrentUserMiddleware = ({ dispatch }: any) => (next: any) =>
    subscribe(ACTION_TYPES.READ_USER, CurrentUserWorker)(next, dispatch);
  
  export const userMiddleware = [CurrentUserMiddleware];