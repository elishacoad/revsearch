import activeRowReducer from './reducer-activerow';
import {combineReducers} from "redux";
import papersReducer from './reducer-papers';

const allReducers = combineReducers({
    papers: papersReducer,
    activeRow: activeRowReducer
});

export default allReducers;