import activeRowReducer from './reducer-activerow';
import {combineReducers} from 'redux';
import filterReducer from './reducer-filter';
import keywordsReducer from './reducer-keywords';
import papersReducer from './reducer-papers';
import searchwordsReducer from './reducer-searchwords';

const allReducers = combineReducers({
    papers: papersReducer,
    activeRowIndex: activeRowReducer,
    keywords: keywordsReducer,
    filters: filterReducer,
    searchwords: searchwordsReducer
});

export default allReducers;