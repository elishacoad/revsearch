export default (state=[], action) => {
    switch(action.type){
        case "SEARCHWORDS_UPDATED":
            return action.payload;
        default:
            // some nonrelevant action taken
            return state;
    }
}