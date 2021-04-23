import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import categories, { CategoriesState } from './categories';
import products, { ProductsState } from './products';
import user, {userState} from './auth';
import cart, {CartState} from './cart'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './root-saga';

export interface  AppState {
  categories: CategoriesState;
  products: ProductsState
  user: userState,
  cart: CartState
}

// @ts-ignore
const t = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancers =
  process.env.NODE_ENV !== 'production' && t ? t : compose;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const rootReducer = combineReducers<AppState>({
  categories,
  products,
  user,
  cart,
});

export const store = createStore(
  persistReducer(persistConfig, rootReducer),
  undefined,
  composeEnhancers(applyMiddleware(...middlewares
      // ...categoriesMiddleware,
      // ...productsMiddleware,
      // ...userMiddleware

    ))
)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export * from './categories'



