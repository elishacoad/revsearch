// state passed to this function is the object that keeps track of current filters
const defaultstate = {
    showIncludes: true,
    showExcludes: true,
    showMaybes: true,
    showUndecided: true
}

export default (state=defaultstate, action) => {
    switch(action.type){
        case "DECISIONFILTER_UPDATED":
            // have to make a newstate since you can't mutate the original state
            const deepClone = JSON.parse(JSON.stringify(state));
            return Object.assign(deepClone, action.payload);
        default:
            // some nonrelevant action taken
            return state;
    }
}