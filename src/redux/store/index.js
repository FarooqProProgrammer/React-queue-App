import { combineReducers, createStore } from 'redux'
import Themereducer from '../Reducer/themeReducers'
import setUser from "../Reducer/setuserReducer"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
const rootReducer = combineReducers({
    Themereducer ,
    setUser
})

const persistConfig = {

    key: 'root',

    storage,

}



const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer)

const persistor = persistStore(store)



export {

    store,

    persistor

}


