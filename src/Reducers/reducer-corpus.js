// state passed to this function is the entire list 
// of papers that belongs to the user
export default (state=[], action) => {
    switch(action.type){
        case "CORPUS_ADDED":
            // set the original papers to the list of papers passed to this reducer
            return action.payload;
        case "PAPER_UPDATED":
            // replace the paper in the list of papers where the
            // paper.id passed matches the paper.id in the list
            return state.map((paper) => paper.id === action.payload.id ? action.payload : paper);
        default:
            // some nonrelevant action taken
            return state;
    }
}