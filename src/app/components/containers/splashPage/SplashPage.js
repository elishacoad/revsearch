/** Keywords UI element that receives a search group object and
 *  displays the terms for thay object, state controls color depending
 *  on the logic of the search
 */
import React from 'react';
import Hero from './Hero';
import AdditionalInfo from './AdditionalInfo';
import WorkFromAnywhere from './WorkFromAnywhere';
import Footer from './Footer';
// import { Glyphicon } from 'react-bootstrap';

class SplashPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <div>
                <Hero />
                <AdditionalInfo />
                <WorkFromAnywhere />
                <Footer />
            </div>
        );
    }
}


export default SplashPage;
