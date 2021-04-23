import { takeLatest, call, put, all } from '@redux-saga/core/effects'
import { createUserProfileDocument } from '../../api'
import { auth, googleProvider, getCurrentUser } from '../../firebase'
import { SignInSuccess, SignInFailure, signOutSuccess, signOutFailure, signUpFailure, signUpSuccess } from './actions'
import { ACTION_TYPES } from './types'
type userSnapshotType = {
    id:any;
    data:any;
    get:any;
    getCurrentUser:() => void
}

export function* getSnapshotFromUserAuth(userAuth:any, additionalData?:any) {
    try {
        const userRef:userSnapshotType = yield call(createUserProfileDocument, userAuth, additionalData)
        const userSnapshot:userSnapshotType = yield userRef.get()
        yield put(
            SignInSuccess({ id: userSnapshot.id, ...userSnapshot.data()})
        )
    } catch (error) {
        yield put(SignInFailure(error))
        
    }
}

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider)
        yield getSnapshotFromUserAuth(user)
    } catch (error) {
        yield put(SignInFailure(error))
        
    }
}

export function* signInWithEmail({payload:{email, password}}:any) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password)
        yield getSnapshotFromUserAuth(user)
    } catch (error) {
        yield put(SignInFailure(error))
    }
}

export function* isUserAuth() {
    try {
        const userAuth:userSnapshotType = yield getCurrentUser()
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth)
    } catch (error) {

        yield put(SignInFailure(error))
    }
}

export function* signOut() {
    try {
        yield auth.signOut()
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure(error))
    }
}

export function* signUp({payload:{email, password, displayName}}:any) {
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password)
        yield put(signUpSuccess({user, additionalData:{displayName}}))
    } catch (error) {
        yield put(signUpFailure(error))
    }
}

export function* signInAfterSignUp({payload: {user,additionalData}}:any) {
    yield getSnapshotFromUserAuth(user, additionalData)
}

export function* onGoogleSignInStart() {
    yield takeLatest(ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* oncheckUserSession() {
    yield takeLatest(ACTION_TYPES.CHECK_USER_SESSION, isUserAuth)
}

export function* onSignInStart() {
    yield takeLatest(ACTION_TYPES.SIGN_OUT_START, signOut)
}

export function* onSignUpStart() {
    yield takeLatest(ACTION_TYPES.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess() {
    yield takeLatest(ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* userSaga() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(oncheckUserSession),
        call(onSignInStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
    ])
}