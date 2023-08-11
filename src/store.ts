import { combineReducers, configureStore, PreloadedState, getDefaultMiddleware } from '@reduxjs/toolkit';

import { apiSlice } from './services/apiSlice';

const rootReducer = combineReducers({ [apiSlice.reducerPath]: apiSlice.reducer });

const middlewares = getDefaultMiddleware().concat(apiSlice.middleware);

if (__DEV__ && !process.env.JEST_WORKER_ID) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: middlewares,
    preloadedState
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
