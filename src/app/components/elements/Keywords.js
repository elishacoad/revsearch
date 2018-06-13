/** Keywords UI element that receives a search group object and
 *  displays the terms for thay object, state controls color depending
 *  on the logic of the search
 */
import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import uuid from 'uuid';

import { SearchLogic } from 'Constants';

// logic modifies the color it displays, updates everytime props changes
const chooseColor = logicField => (logicField === SearchLogic.CONTAINING ? 'green' : 'red');

class Keywords extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: chooseColor(this.props.searchObject.logic),
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            color: chooseColor(nextProps.searchObject.logic),
        });
    }

    render() {
        return (
            <ul className={`keyword-list-${this.state.color}`}>
                {this.props.searchObject.terms.map(word => (
                    <li key={uuid.v1()} className="keyword">
                        <p className={`keyword-${this.state.color}`} >{`${word}  `}</p>
                        <Glyphicon
                            onClick={() => {
                                this.props.clearInput();
                                this.props.removeSearchTerm(this.props.searchObject, word);
                            }}
                            glyph="remove"
                        />
                    </li>
                ))}
            </ul>
        );
    }
}

export default Keywords;
