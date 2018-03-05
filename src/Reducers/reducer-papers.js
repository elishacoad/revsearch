// state passed to this function is the list of papers
export default (state=[], action) => {
    switch(action.type){
        case "CORPUS_ADDED":
            return action.payload;
        case "DECISION_CHANGED":
            return state.map((paper) => paper.id === action.payload.id ? action.payload : paper);
        default:
            // some nonrelevant action taken
            return state;
    }
}