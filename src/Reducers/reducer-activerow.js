// this is not implimented/being used yet
// state here is the row DOM element that is currently selected
export default (state=null, action) => {
    switch(action.type){
        case "ROW_SELECTED":
            state = action.payload;
            break;
        default:
            // some nonrelevant action taken
    }
    return state;
}