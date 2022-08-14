# React Redux Hooks - useDispatch() and useSelector()
Redux code is written on multiple files by creating multiple folders for each components

# Building Parts of Redux
Redux requires three main building parts to function: actions, reducers, and store. 

=> A store — an object that holds the app state data 
=> A reducer — a function that returns some state data, triggered by an action type 
=> An action — an object that tells the reducer how to change the state. It must contain a type property, and it can contain an optional payload property

## Actions
Actions are objects that are used to send data to the Redux store. They typically have two properties: a type property for describing what the action does and a payload property that contains the information that should be changed in the app state.

Note: The type is usually in all caps with its words separated by underscores. For example, SIGNUP_USER or DELETE_USER_DATA.

## Reducers
Reducers are pure functions that implement the action’s behavior. They take the current application state, perform an action, and then return a new state.

## Store
The application’s state is housed in the store. There is only one store in any Redux application:

import { createStore } from 'redux'

const store = createStore(counterReducer);

NOte: use combineReducers() to combine different reducer into rootReducer

# Redux Hooks - useSelector and useDispatch
React Redux offers a set of Hooks as an alternative to the existing connect() higher order component. These Hooks allow us to connect to the Redux store and dispatch actions without having to wrap your components in connect().

Before Hooks, we always used a connect() which is a higher-order component and wrapper to our component, connect() read values from the Redux store.

## connect() takes two arguments, both optional: - mapStateToProps - mapDispatchToProps

1. mapStateToProps: called every time the store state changes. It receives the entire store state and should return an object of data this component needs.

2. mapDispatchToProps: This parameter can either be a function, or an object. If it’s a function, it will be called once on component creation. It will receive dispatch as an argument and should return an object full of functions that use dispatch to dispatch actions.

## using Hooks
Let's move towards react-redux hooks. React-Redux now offers a set of hook APIs as an alternative to existing connect() Higher-Order Component. These APIs allow you to subscribe to the Redux store and dispatch actions, without having to wrap your components in connect(). By using the Hook API with Function components, components are kept small and the code remains clean.

### useSelector
The equivalent of mapStateToProps is useSelector. It takes in a function argument that returns the part of the state that we want.

useSelector() hook is equivalent of mapStateToProps. useSelector is a function that takes the current state as an argument and returns whatever data we want from it and it allows us to store the return values inside a variable within the scope of our functional components instead of passing down as props

### useDispatch
The equivalent of map dispatch to props is useDispatch. We will invoke useDispatch and store it to a variable, dispatch. Dispatch will work with the allActions imported from the actions folder. useDispatch() hook is equivalent of mapDispatchToProps.We will invoke useDispatch and store it to a variable, dispatch. This hook returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed. And we dispatch it by calling dispatch passing in the return value from the action creator.

### useStore()
useStore() hook returns a reference to the same Redux store that was passed into Provider component.

This hook should probably not be used frequently. Prefer useSelector() as your primary choice. However, this may be useful for less common scenarios that do require access to the store, such as replacing reducers.

const store = useStore() // The component will not automatically update if the store state changes return

{store.getState().obj.name}
Steps using Connect method
npm install redux, react-redux, redux-thunk

### create store.js in root folder (under src)

Inside store.js

Import {createStore, applyMiddleware, combineReducers, compose} from redux
Import thunk from redux-thunk
Inside store.js - Working With Reducers

create reducers which accepts 2 args i.e. state and action
use the switch case to handle according to action.type
Inside store.js - Working with CombineReducers

Combine multiple reducers using combine reducers into rootReducers
Inside store.js - Working with Actions

Write down the action so that it could dispatch to reducers and export it
Action is written which must have another "return function(dispatch)" that must be return back
Inside store.js - Working with STORE

create the store that accepts 2 args
1st arg: rootReducer
2nd arg: composeEnhancers(applyMiddleware(...middlewares))
where composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
export the store
Inside main component app.js - Working with Provider


# Project - short eComm
=> Component of our project looks like this. But remember this project only demonstrates how the redux works.

App
    Navbar
        CurrentlyOnCart
    Home
        Product
            ProductCard
    Cart
        ProductCard
    Footer

# Redux DevTools Extension and redux-thunk
<!-- Install the redux devtools extension  -->
npm install redux-devtools-extension redux-thunk

<!-- Import composeWithDevTools and thunk so that async for actionCreator could be done  -->
import { composeWithDevTools } from 'redux-devtools-extension';
const thunk = require('redux-thunk');
const middlewares = [thunk];

<!-- use as Below along with middlewares where middleware = thunk -->
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
)
