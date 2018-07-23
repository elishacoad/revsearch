import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Landing extends Component {
    constructor(props) {
        super(props);

        this.login = this.login.bind(this);
    }

    login() {
        this.props.auth.login();
    }

    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <div className="container">
                {
                    isAuthenticated() && (
                        <h4>
                            You are logged in!
                        </h4>
                    )
                }
                {
                    !isAuthenticated() && (
                        <h4>
                            You are not logged in! Please{' '}
                            <Button
                                onClick={this.login}
                            >
                                Log In
                            </Button>
                            {' '}to continue.
                        </h4>
                    )
                }
            </div>
        );
    }
}

export default Landing;
