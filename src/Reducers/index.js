import activeRowReducer from './reducer-activerow';
import {combineReducers} from "redux";
import filterReducer from './reducer-filter';
import papersReducer from './reducer-papers';

const allReducers = combineReducers({
    papers: papersReducer,
    activeRow: activeRowReducer,
    filters: filterReducer
});

export default allReducers;