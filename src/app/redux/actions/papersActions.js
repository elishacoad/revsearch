// https://daveceddia.com/where-fetch-data-redux/
export const FETCH_PAPERS_BEGIN = 'FETCH_PAPERS_BEGIN';
export const FETCH_PAPERS_SUCCESS = 'FETCH_PAPERS_SUCCESS';
export const FETCH_PAPERS_FAILURE = 'FETCH_PAPERS_FAILURE';
export const PAPER_UPDATE = 'PAPER_UPDATE';

export const fetchPapersBegin = () => ({
    type: FETCH_PAPERS_BEGIN,
});

export const fetchPapersSuccess = items => ({
    type: FETCH_PAPERS_SUCCESS,
    payload: { items },
});

export const fetchPapersError = error => ({
    type: FETCH_PAPERS_FAILURE,
    payload: { error },
});

export const updatePaper = paper => ({
    type: PAPER_UPDATE,
    payload: { paper },
});

// Handle HTTP errors since fetch won't.
function handlefetchErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}


export function fetchPapers() {
    return (dispatch) => {
        dispatch(fetchPapersBegin());
        return fetch('http://localhost:3000/api/papers')
            .then(handlefetchErrors)
            .then(res => res.json())
            .then((res) => {
                dispatch(fetchPapersSuccess(res));
                return res;
            })
            .catch(error => dispatch(fetchPapersError(error)));
    };
}

