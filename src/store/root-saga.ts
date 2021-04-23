import {  all, call } from "@redux-saga/core/effects";
import { userSaga } from "./auth";
import { cartSagas } from "./cart";
import {  categoriesSagas } from "./categories";
import { productsSagas } from "./products";

export function* rootSaga() {
    yield all([
        call(categoriesSagas),
        call(productsSagas),
        call(userSaga),
        call(cartSagas)
    ])
}