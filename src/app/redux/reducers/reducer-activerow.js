// this is not implimented/being used yet
// state here is the row DOM element that is currently selected
const defaultstate = 0;

export default (state=defaultstate, action) => {
    switch(action.type){
        case "ROW_SELECTED":
            state = action.payload;
            break;
        case "INCREMENT_ROW":
            state += 1;
            break;
        default:
            // some nonrelevant action taken
    }
    return state;
}