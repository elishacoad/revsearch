/** Keywords UI element that receives a search group object and
 *  displays the terms for thay object, state controls color depending
 *  on the logic of the search
 */
import React from 'react';
import { Row, Col } from 'react-bootstrap';

class AdditionalInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }


    render() {
        return (
            <Row className="additional-info dark-row">
                <Col md={3} />
                <Col md={6}>
                    <p>
                        Import referances, screen studies, retrieve full text and much more with
                        Revseach to maintain a productive work flow in your systematic review.
                    </p>
                </Col>
                <Col md={3} />
            </Row>
        );
    }
}


export default AdditionalInfo;
