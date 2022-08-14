import React from 'react'
import { applyMiddleware, createStore, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {logger} from 'redux-logger';
import rootReducer from './rootReducer'

const middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
)

export default store