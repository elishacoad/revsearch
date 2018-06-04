export default (state=[], action) => {
    switch(action.type){
        case "SEARCHGROUP_ADDED":
            return state.concat(action.payload);
        case "SEARCHGROUPS_UPDATED":
            console.log(state.map(group => group.key === action.payload.key ? action.payload : group));
            return state.map(group => group.key === action.payload.key ? action.payload : group);
        default:
            // some nonrelevant action taken
            return state;
    }
}