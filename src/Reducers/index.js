import {combineReducers} from "redux";
import papersReducer from './reducer-papers'

const allReducers = combineReducers({
    papers: papersReducer
});

export default allReducers;