// state passed to this function is the object that keeps track of current filters
const defaultstate = {
    positiveWords: [],
    negativeWords: [],
};

export default (state = defaultstate, action) => {
    switch (action.type) {
        case 'KEYWORDS_UPDATED':
            // have to make a newstate since you can't mutate the original state
            const deepClone = JSON.parse(JSON.stringify(state));
            return Object.assign(deepClone, action.payload);
        default:
            // some nonrelevant action taken
            return state;
    }
};
