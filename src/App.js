// https://manage.auth0.com/#/applications/i9DlcDL1TASkNDhhFaZOXIsx996ySFZ6/quickstart
import React from 'react';
import { Grid } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import 'Style/index.scss';
import PaperScreening from 'Presentationals/paperScreening/PaperScreening';
import RevNavbar from 'Containers/navbar/RevNavbar';
import { setUserProfile } from './app/redux/actions';


const App = (props) => {
    props.auth.getProfile().then(res => props.setUserProfile(res));
    return (
        <div id="app">
            <RevNavbar {...props} />
            {props.auth.isAuthenticated() && (
                <Grid fluid>
                    <PaperScreening />
                </Grid>
            )}
        </div>);
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ setUserProfile }, dispatch);
}

export default connect(null, matchDispatchToProps)(App);
