import { replaceWhere } from '../../globals/helpers';

export default (state = [], action) => {
    switch (action.type) {
        case 'SEARCHGROUP_ADDED':
            return state.concat(action.payload);
        case 'SEARCHGROUPS_UPDATED':
            return replaceWhere(state, 'key', action.payload.key, action.payload);
        default:
            // some nonrelevant action taken
            return state;
    }
};
