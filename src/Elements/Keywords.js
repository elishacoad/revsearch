/** Keywords UI element that receives a search group object and
 *  displays the terms for thay object, state controls color depending
 *  on the logic of the search
 */

import { Glyphicon } from 'react-bootstrap';
import React from 'react';
import { SearchLogic } from "../Elements";

export class Keywords extends React.Component {
    constructor (props) {
        super(props);

        this.chooseColor = this.chooseColor.bind(this);

        this.state = {
            color : this.chooseColor(this.props.searchObject.logic)
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            color : this.chooseColor(nextProps.searchObject.logic)
        });
    }

    // logic modifies the color it displays, updates everytime props changes
    chooseColor(logicField){
        if (logicField === SearchLogic.CONTAINING)
            return 'green';
        return 'red';
    }

    render(){
        return(
            <ul className={'keyword-list-' + this.state.color}>
                {this.props.searchObject.terms.map((word, i) => {
                    return (
                        <li key={i} className='keyword'>
                            <p className={'keyword-' + this.state.color} >{word + "  "}</p>
                            <Glyphicon onClick={(e) => {
                                this.props.clearInput()
                                this.props.removeSearchTerm(this.props.searchObject, word)}} glyph="remove" />
                        </li>
                    );
                })}
            </ul>
        );
    }
}
