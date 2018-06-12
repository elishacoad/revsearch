// this is not implimented/being used yet
// state here is the row DOM element that is currently selected
const defaultstate = 0;

export default (state = defaultstate, action) => {
    switch (action.type) {
        case 'ROW_SELECTED':
            return action.payload;
        case 'INCREMENT_ROW':
            return state + 1;
        default:
            // some nonrelevant action taken
            return state;
    }
};
