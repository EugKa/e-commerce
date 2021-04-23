import { takeLatest, call, put, all } from '@redux-saga/core/effects'
import { ACTION_TYPES } from '../auth/types'
import { clearCart } from './actions'


export function* clearCartOnSignOut() {
    yield put(clearCart())
}

export function* onSignOutSuccess() {
    yield takeLatest(ACTION_TYPES.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}


export function* cartSagas() {
    yield (all([
            call(onSignOutSuccess),
        ]))
}