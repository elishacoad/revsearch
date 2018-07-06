import { combineReducers } from 'redux';
import activeRowReducer from './reducer-activerow';
import filterReducer from './reducer-decisionFilter';
import keywordsReducer from './reducer-highlightWords';
import searchwordsReducer from './reducer-searchgroups';
import paperReducer from './reducer-papers';

const allReducers = combineReducers({
    paperstate: paperReducer,
    activeRowIndex: activeRowReducer,
    highlightWords: keywordsReducer,
    decisionFilter: filterReducer,
    searchgroups: searchwordsReducer,
});

export default allReducers;
