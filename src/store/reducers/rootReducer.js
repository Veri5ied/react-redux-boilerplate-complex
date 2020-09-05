import firstReducer from './firstReducer'
import secondReducer from './secondReducer'
import {combineReducers} from 'react-redux'

const rootReducer = combineReducers({
    first: firstReducer,
    second: secondReducer,
})

export default rootReducer;
