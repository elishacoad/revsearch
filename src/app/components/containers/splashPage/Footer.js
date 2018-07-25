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
            <div className="footer dark-row">
                <div className="basic-container">
                    <p>
                        Revsearch is tailored toward your specific systematic
                        review providing an experience unlike any other program.
                    </p>
                    <p>
                        <button className="rev-button theme-button">SIGN UP TODAY</button>
                    </p>
                </div>
            </div>
        );
    }
}


export default Footer;
