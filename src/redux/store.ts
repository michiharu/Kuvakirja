import { combineReducers, configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './saga';
import authModule from './authModule';


export const rootReducer = combineReducers({
  auth: authModule.reducer
});

export const setupStore = () => {
  const starterKitMiddlewares = getDefaultMiddleware({thunk: false});
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, ...starterKitMiddlewares];

  const store = configureStore({
      reducer: rootReducer,
      middleware: middlewares,
  });

  sagaMiddleware.run(rootSaga);

  return store
}