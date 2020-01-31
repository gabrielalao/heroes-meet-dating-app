
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'
import { createStore,  applyMiddleware, compose } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from './reducer'
const middlewares = [ReduxThunk];



const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = createStore(persistedReducer, compose(applyMiddleware(...middlewares, logger)))

export default store;