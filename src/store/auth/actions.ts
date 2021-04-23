import { ACTION_TYPES } from "./types";

export interface IEmailSignIn {
    email: string;
    password: string;
}

export interface ISignUpUser {
    user: any;
    additionalData:any
}

export const checkUserSession =() => ({
    type:ACTION_TYPES.CHECK_USER_SESSION
})

//----GOOGLE
export const googleSignInStart = () => ({
    type:ACTION_TYPES.GOOGLE_SIGN_IN_START
})

//----EMAIL
export const emailSignInStart = (emailAndPassword: IEmailSignIn) => ({
    type:ACTION_TYPES.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})

//----SIGN_IN
export const SignInSuccess = (user:any) => ({
    type:ACTION_TYPES.SIGN_IN_SUCCESS,
    payload: user
})

export const SignInFailure = (error:any) => ({
    type:ACTION_TYPES.SIGN_IN_FAILURE,
    payload: error
})

//----SIGN_OUT
export const signOutStart = () => ({
    type:ACTION_TYPES.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type:ACTION_TYPES.SIGN_OUT_SUCCESS
})

export const signOutFailure = (error:any) => ({
    type:ACTION_TYPES.SIGN_OUT_FAILURE,
    paykoad:error
})
//----SIGN_UP
export const signUpStart = (userCredentials:any) => ({
    type:ACTION_TYPES.SIGN_UP_START,
    payload: userCredentials
})

export const signUpSuccess = ({user, additionalData}:ISignUpUser) => ({
    type:ACTION_TYPES.SIGN_UP_SUCCESS,
    payload: {user, additionalData}
})

export const signUpFailure = (error:any) => ({
    type:ACTION_TYPES.SIGN_UP_FAILURE,
    paykoad:error
})


