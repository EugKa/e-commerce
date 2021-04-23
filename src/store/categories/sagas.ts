import { takeLatest, call, put, all } from '@redux-saga/core/effects'
import { ACTION_TYPES } from './types'
import * as api from '../../api';
import { fetchCategoriesSuccess, fetchCategoriesError } from './actions';
import { CategorieCollection } from '../../types';

function sagafetchCategories() {
  const snapshot = api.getList()
  return snapshot
}

export function* sagaCategoriesWorker() {
    try {
      const payload: CategorieCollection = yield call(sagafetchCategories)
      yield put(fetchCategoriesSuccess(payload))  
      } catch (error) {
        yield put(fetchCategoriesError(error.massage))
      }
    
}

export function* sagafetchCategoriesStart() {
    yield takeLatest(ACTION_TYPES.FETCH_CATEGORIES_START, sagaCategoriesWorker)
}

export function* categoriesSagas() {
  yield all([call(sagafetchCategoriesStart)])
}


