/** Keywords UI element that receives a search group object and
 *  displays the terms for thay object, state controls color depending
 *  on the logic of the search
 */
import React from 'react';
import { Col, Row } from 'react-bootstrap';

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }


    render() {
        return (
            <Row className="footer dark-row">
                <Col md={3} />
                <Col md={6}>
                    <p>
                        Revsearch is tailored toward your specific systematic
                        review providing an experience unlike any other program.
                    </p>
                    <p>
                        <button className="theme-button">SIGN UP TODAY</button>
                    </p>
                </Col>
                <Col md={3} />
            </Row>
        );
    }
}


export default Footer;
