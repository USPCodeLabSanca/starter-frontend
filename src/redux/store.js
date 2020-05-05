import { createStore } from 'redux';
import reducers from './reducers';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
}

const persistedReducers = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducers);

export const persistor = persistStore(store);