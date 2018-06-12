const defaultstate = {
    positiveWords: [],
    negativeWords: [],
};

export default (state = defaultstate, action) => {
    switch (action.type) {
        case 'HIGHLIGHTWORDS_SET':
            return action.payload;
        default:
            // some nonrelevant action taken
            return state;
    }
};
