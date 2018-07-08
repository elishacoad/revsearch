// http://sborrazas.com/blog/redux-apimap
// https://github.com/sborrazas/redux-apimap

const USERS_FETCH = 'USERS_FETCH';
const USERS_FETCH_SUCCESS = 'USERS_FETCH_SUCCESS';
const USERS_FETCH_FAILURE = 'USERS_FETCH_FAILURE';
const USERS_CREATE = 'USERS_CREATE';
const USERS_CREATE_SUCCESS = 'USERS_CREATE_SUCCESS';
const USERS_CREATE_FAILURE = 'USERS_CREATE_FAILURE';

// Specify the API endpoints and each action that it allows.
const users = {
    url: '/users',
    actions: {
        fetch: {
            types: [USERS_FETCH, USERS_FETCH_SUCCESS, USERS_FETCH_FAILURE],
            // method: 'GET' // DEFAULT
        },
        create: {
            types: [USERS_CREATE, USERS_CREATE_SUCCESS, USERS_CREATE_FAILURE],
            method: 'POST', // Option, submit request with POST
            multipart: true, // Option, submit request as multipart
        },
    },
};

export default users;
