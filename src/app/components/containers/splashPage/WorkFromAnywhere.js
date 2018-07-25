/** Keywords UI element that receives a search group object and
 *  displays the terms for thay object, state controls color depending
 *  on the logic of the search
 */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import image from '../../../../assets/CrossCompatible.png';

class WorkFromAnywhere extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <div className="work-from-anywhere light-row">
                <div className="basic-container">
                    <Row>
                        <Col md={8}>
                            <h1>Work from anywhere</h1>
                            <p>
                                All your progress and data is securely
                                stored and backed up on the cloud
                                allowing you and your team to easily
                                access it from any device anytime,
                                anywhere.
                            </p>
                        </Col>
                        <Col md={4}>
                            <img src={image} alt="Screen types" />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}


export default WorkFromAnywhere;
