import React from 'react';
import { Button } from 'react-bootstrap';

const Landing = (props) => {
    const { isAuthenticated } = props.auth;
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
                            onClick={props.auth.login}
                        >
                            Log In
                        </Button>
                        {' '}or{' '}
                        <Button
                            onClick={props.auth.signUp}
                        >
                            Sign Up
                        </Button>
                        {' '}to continue.
                    </h4>
                )
            }
            <div id="login-container" />
        </div>
    );
}

export default Landing;
