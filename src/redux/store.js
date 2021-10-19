//import { createStore, applyMiddleware } from "redux";
import { createStore } from "redux";
//import logger from "redux-logger";
import { persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./root.reducer";

//const middlewares = [logger, composeWithDevTools];

//export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const store = createStore(rootReducer, composeWithDevTools());

export const persistor = persistStore(store);
