// https://daveceddia.com/where-fetch-data-redux/
export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN,
});

export const fetchProductsSuccess = products => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: { products },
});

export const fetchProductsError = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: { error },
});

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export function fetchProducts() {
    return (dispatch) => {
        dispatch(fetchProductsBegin());
        return fetch('https://jsonplaceholder.typicode.com/todos')
            .then(handleErrors)
            .then(res => res.json())
            .then((res) => {
                const output = [];
                for (let i = 0; i < res.length; i += 1) { output.push(res[i].title); }
                return output;
            })
            .then((res) => {
                dispatch(fetchProductsSuccess(res));
                return res;
            })
            .catch(error => dispatch(fetchProductsError(error)));
    };
}

