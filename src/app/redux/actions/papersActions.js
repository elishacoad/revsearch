// https://daveceddia.com/where-fetch-data-redux/
export const FETCH_PAPERS_BEGIN = 'FETCH_PAPERS_BEGIN';
export const FETCH_PAPERS_SUCCESS = 'FETCH_PAPERS_SUCCESS';
export const FETCH_PAPERS_FAILURE = 'FETCH_PAPERS_FAILURE';
export const PAPER_UPDATE = 'PAPER_UPDATE';

export const fetchPapersBegin = () => ({
    type: FETCH_PAPERS_BEGIN,
});

export const fetchPapersSuccess = papers => ({
    type: FETCH_PAPERS_SUCCESS,
    payload: { papers },
});

export const fetchPapersError = error => ({
    type: FETCH_PAPERS_FAILURE,
    payload: { error },
});

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export function fetchPapers() {
    return (dispatch) => {
        dispatch(fetchPapersBegin());
        return fetch('http://localhost:3000/api/papers')
            .then(handleErrors)
            .then(res => res.json())
            .then((res) => {
                const output = [];
                for (let i = 0; i < res.length; i += 1) { output.push(res[i].title); }
                return output;
            })
            .then((res) => {
                dispatch(fetchPapersSuccess(res));
                return res;
            })
            .catch(error => dispatch(fetchPapersError(error)));
    };
}

