/* eslint-disable class-methods-use-this */
import auth0 from 'auth0-js';
import history from '../history';

const AUTH_CONFIG = {
    domain: 'revsearch.eu.auth0.com',
    clientId: 'i9DlcDL1TASkNDhhFaZOXIsx996ySFZ6',
    callbackUrl: 'http://localhost:8081/callback',
};

export default class Auth {
    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: AUTH_CONFIG.domain,
            clientID: AUTH_CONFIG.clientId,
            redirectUri: AUTH_CONFIG.callbackUrl,
            audience: `https://${AUTH_CONFIG.domain}/userinfo`,
            responseType: 'token id_token',
            scope: 'openid profile',
        });

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }

    login() {
        this.auth0.authorize();
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
