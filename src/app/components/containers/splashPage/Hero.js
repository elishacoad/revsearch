import React from 'react';

class Hero extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div className="hero light-row">
                <div className="basic-container flex-centered">
                    <h1>Boost your systematic reviews with Revsearch</h1>
                    <p>
                        Revsearch is a smart and intuitive platform that let you and your
                        team manage your systematic review in a simple, flexible,
                        and efficient way.
                    </p>
                    <button className="rev-button theme-button"><span>SIGN UP FOR FREE </span></button>
                    <p>
                        Already a member?{' '}
                        <a href="#test">Sign in</a>
                    </p>
                </div>
            </div>
        );
    }
}


export default Hero;
