import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { mainReducer } from './mainReducer';
import logger from 'redux-logger';
import { Persistor } from 'redux-persist/lib/types';

const persistConfig = {
    key: 'mainReducer',
    storage,
    whitelist: ['language', 'cart']
};

const persistentReducer = persistReducer(persistConfig, mainReducer);
const middleware = applyMiddleware(thunk, logger);
const store = createStore(persistentReducer, middleware);
const persistor = persistStore(store);
export { store, persistor };