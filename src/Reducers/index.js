import activeRowReducer from './reducer-activerow';
import {combineReducers} from 'redux';
import corpusReducer from './reducer-corpus';
import filterReducer from './reducer-filter';
import keywordsReducer from './reducer-keywords';
import searchwordsReducer from './reducer-searchwords';

const allReducers = combineReducers({
    papers: corpusReducer,
    activeRowIndex: activeRowReducer,
    keywords: keywordsReducer,
    filters: filterReducer,
    searchwords: searchwordsReducer
});

export default allReducers;