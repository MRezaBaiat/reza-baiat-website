import monitorReducersEnhancer from '../redux/enhancers/monitorReducer';
import loggerMiddleware from '../redux/middlewares/logger';
import reducer from '../redux/reducer';
import { combineReducers, configureStore, getDefaultMiddleware } from 'redux-starter-kit';

const rootReducer = combineReducers({
  global: reducer
});

export default function initStore (preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [loggerMiddleware, ...getDefaultMiddleware()],
    preloadedState,
    enhancers: [monitorReducersEnhancer]
  });

  // adding HOT reloading capability
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../redux/reducer', () => store.replaceReducer(reducer));
  }

  return store;
}
