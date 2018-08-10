/* eslint-disable class-methods-use-this */
import auth0 from 'auth0-js';
import Auth0Lock from 'auth0-lock';
import history from '../history';

const AUTH_CONFIG = {
    domain: 'revsearch.eu.auth0.com',
    clientId: '9UWNRKmygH6WQ0BaIQWH4N3MNfOF2mx1',
    callbackUrl: 'http://localhost:8081/callback',
};

// https://auth0.com/docs/libraries/lock/v11/configuration
// login with google not working and callback is not 'http://localhost:8081/callback'
const lockOptions = {
    theme: {
        logo: 'https://s3.amazonaws.com/revsearch-assets/logo.png',
        primaryColor: 'navy',
        labeledSubmitButton: false,
    },
    container: 'login-container',
    allowShowPassword: true,
    closable: false,
    languageDictionary: {
        title: 'Revsearch',
    },
    allowedConnections: ['Username-Password-Authentication'],
};

export default class Auth {
    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: AUTH_CONFIG.domain,
            clientID: AUTH_CONFIG.clientId,
            audience: `https://${AUTH_CONFIG.domain}/userinfo`,
            responseType: 'token id_token',
            scope: 'openid profile',
            redirectUrl: 'http://localhost:8081/callback/',
        });
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.signUp = this.signUp.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }

    login() {
        new Auth0Lock(AUTH_CONFIG.clientId, AUTH_CONFIG.domain, {
            ...lockOptions, auth: this.auth0, allowSignUp: false, allowLogin: true,
        }).show();
    }

    signUp() {
        new Auth0Lock(AUTH_CONFIG.clientId, AUTH_CONFIG.domain, {
            ...lockOptions, auth: this.auth0, allowSignUp: true, allowLogin: false,
        }).show();
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                history.replace('/paperscreening');
            } else if (err) {
                history.replace('/');
                console.log(err);
            }
        });
    }

    setSession(authResult) {
        // Set the time that the access token will expire at
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        // navigate to the landing route
        history.replace('/');
    }

    logout() {
        // Clear access token and ID token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // navigate to the landing route
        history.replace('/');
    }

    isAuthenticated() {
        // Check whether the current time is past the
        // access token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

    // https://auth0.com/docs/quickstart/spa/vanillajs/02-user-profile
    getProfile() {
        return new Promise((resolve) => {
            let userProfile = null;
            const accessToken = localStorage.getItem('access_token');
            if (!accessToken) {
                console.log('Access Token must exist to fetch profile');
            }
            this.auth0.client.userInfo(accessToken, (err, profile) => {
                if (profile) {
                    userProfile = profile;
                    resolve(userProfile);
                }
            });
        });
    }
}
