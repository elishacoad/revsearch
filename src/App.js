// https://manage.auth0.com/#/applications/i9DlcDL1TASkNDhhFaZOXIsx996ySFZ6/quickstart
import React, { Component } from 'react';
import { Button, Grid } from 'react-bootstrap';

import 'Style/index.scss';
import PaperScreening from 'Presentationals/paperScreening/PaperScreening';
import RevNavbar from 'Containers/navbar/RevNavbar';


class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.goTo = this.goTo.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    goTo(route) {
        this.props.history.replace(`/${route}`);
    }

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    render() {
        const { isAuthenticated } = this.props.auth;

        return (
            <div id="app">
                <RevNavbar />
                <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={() => this.goTo('landing')}
                >
                    Landing
                </Button>
                {
                    !isAuthenticated() && (
                        <Button
                            id="qsLoginBtn"
                            bsStyle="primary"
                            className="btn-margin"
                            onClick={this.login}
                        >
                            Log In
                        </Button>)
                }
                {
                    isAuthenticated() && (
                        <Button
                            id="qsLogoutBtn"
                            bsStyle="primary"
                            className="btn-margin"
                            onClick={this.logout}
                        >
                            Log Out
                        </Button>)
                }
                <Grid fluid>
                    <PaperScreening />
                </Grid>
            </div>
        );
    }
}


export default App;
