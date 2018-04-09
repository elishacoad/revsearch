import activeRowReducer from './reducer-activerow';
import {combineReducers} from "redux";
import filterReducer from './reducer-filter';
import papersReducer from './reducer-papers';

const allReducers = combineReducers({
    papers: papersReducer,
    activeRowIndex: activeRowReducer,
    filters: filterReducer
});

export default allReducers;