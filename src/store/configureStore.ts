import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/combineReducer'

const devExtn =
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    process.env.NODE_ENV !== 'production'
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        : (f: any) => f

export default () => {
    const store = createStore(
        rootReducer,
        {},
        compose(applyMiddleware(thunk), devExtn)
    )
    return store
}
