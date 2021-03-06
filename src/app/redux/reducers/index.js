import { combineReducers } from 'redux';
import activeRowReducer from './reducer-activerow';
import corpusReducer from './reducer-corpus';
import filterReducer from './reducer-decisionFilter';
import keywordsReducer from './reducer-highlightWords';
import searchwordsReducer from './reducer-searchgroups';

const allReducers = combineReducers({
    papers: corpusReducer,
    activeRowIndex: activeRowReducer,
    highlightWords: keywordsReducer,
    decisionFilter: filterReducer,
    searchgroups: searchwordsReducer,
});

export default allReducers;
