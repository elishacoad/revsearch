// state passed to this function is the object that keeps track of current filters
const defaultstate = {
    allowIncludes: true,
    allowExcludes: true,
    allowMaybes: true,
    allowUndecided: true,
};

export default (state = defaultstate, action) => {
    switch (action.type) {
        case 'DECISIONFILTER_SET':
            return action.payload;
        default:
            // some nonrelevant action taken
            return state;
    }
};
