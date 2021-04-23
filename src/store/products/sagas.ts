import { takeLatest, put, call, all } from "@redux-saga/core/effects";
import { ProductCollection } from "../../types";
import { ACTION_TYPES } from "./types";
import * as api from '../../api';
import { fetchProductsError, fetchProductsSuccess } from "./actions";
function fetchProducts() {
    const snapshot = api.getItems()
    return snapshot
}

export function* sagaFWorker() {
    try {
        const payload:ProductCollection = yield call(fetchProducts)
        yield put(fetchProductsSuccess(payload))
    } catch (error) {
        yield put(fetchProductsError(error.massage))
    }
    
}

export function* sagaFetchProductsStart() {
    yield takeLatest(ACTION_TYPES.FETCH_PRODUCTS_START, sagaFWorker)
}

export function* productsSagas() {
    yield all([call(sagaFetchProductsStart)])
  }