import { replaceWhere } from '../../globals/helpers';
import {
    FETCH_PAPERS_BEGIN,
    FETCH_PAPERS_SUCCESS,
    FETCH_PAPERS_FAILURE,
    PAPER_UPDATE,
} from '../actions/papersActions';

const initialState = {
    items: [],
    loading: false,
    error: null,
};

export default function paperReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PAPERS_BEGIN:
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: true,
                error: null,
            };

        case FETCH_PAPERS_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                loading: false,
                items: action.payload.items,
            };

        case FETCH_PAPERS_FAILURE:
            // The request failed, but it did stop, so set loading to "false".
            // Save the error, and we can display it somewhere
            // Since it failed, we don't have items to display anymore, so set it empty.
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: [],
            };

        case PAPER_UPDATE:
            // replace the paper in the list of papers where the
            // paper.id passed matches the paper.id in the list
            return {
                ...state,
                items: replaceWhere(state.items, 'id', action.payload.paper.id, action.payload.paper),
            };

        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}
