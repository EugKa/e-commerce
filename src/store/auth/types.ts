export enum ACTION_TYPES {
    GOOGLE_SIGN_IN_START='@@USER/GOOGLE_SIGN_IN_START',
    EMAIL_SIGN_IN_START='@@USER/EMAIL_SIGN_IN_START',
    SIGN_IN_SUCCESS='@@USER/SIGN_IN_SUCCESS',
    SIGN_IN_FAILURE='@@USER/SIGN_IN_FAILURE',

    CHECK_USER_SESSION= '@@USER/CHECK_USER_SESSION',

    SIGN_OUT_START= '@@USER/SIGN_OUT_START',
    SIGN_OUT_SUCCESS= '@@USER/SIGN_OUT_SUCCESS',
    SIGN_OUT_FAILURE= '@@USER/SIGN_OUT_FAILURE',

    SIGN_UP_START= '@@USER/SIGN_UP_START',
    SIGN_UP_SUCCESS= '@@USER/SIGN_UP_SUCCESS',
    SIGN_UP_FAILURE= '@@USER/SIGN_UP_FAILURE',

}