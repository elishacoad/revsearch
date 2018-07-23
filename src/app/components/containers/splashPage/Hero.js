/** Keywords UI element that receives a search group object and
 *  displays the terms for thay object, state controls color depending
 *  on the logic of the search
 */
import React from 'react';
import { Row, Jumbotron, Col } from 'react-bootstrap';

class Hero extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }


    render() {
        return (
            <Row className="hero light-row">
                <Col md={3} />
                <Col md={6}>
                    <Jumbotron>
                        <h1>Boost your systematic reviews with Revsearch</h1>
                        <p>
                            Revsearch is a smart and intuitive platform that let you and your
                            team manage your systematic review in a simple, flexible,
                            and efficient way.
                        </p>
                        <button className="theme-button"><span>SIGN UP FOR FREE </span></button>
                        <p>
                            Already a member?{' '}
                            <a href="#test">Sign in</a>
                        </p>
                    </Jumbotron>
                </Col>
                <Col md={3} />
            </Row>
        );
    }
}


export default Hero;
