import React from 'react'
import { Glyphicon } from 'react-bootstrap';
import { FormElement } from './FormElement'
import { PaperFields, SearchLogic } from '../Constants'
import { DropdownElement } from './DropdownElement'
import { logicalToDisplayName } from './helper'

export class SearchGroup extends React.Component {
    constructor () {
        super()
        this.state = {
            inputValue : ''
        }
    }

    render(){
        let field = this.props.searchObject.field
        let logic = this.props.searchObject.logic

        return(
            <div>
                <hr></hr>
                <DropdownElement
                    bstyle="default"
                    title={logicalToDisplayName[field]}
                    id="searchgroup-field-select"
                    items={PaperFields}
                    onSelect={choice => {
                        let newSearchObject = this.props.searchObject
                        newSearchObject.field = PaperFields[choice]
                        this.props.editSearch(newSearchObject)
                }}/>

                <DropdownElement
                    bstyle="default"
                    title={logicalToDisplayName[logic]}
                    id="searchgroup-logic-select"
                    items={SearchLogic}
                    onSelect={choice => {
                        let newSearchObject = this.props.searchObject
                        newSearchObject.logic = SearchLogic[choice]
                        this.props.editSearch(newSearchObject)
                }}/>

                <FormElement
                    type="text"
                    placeholder="+ add word"
                    value={this.state.inputValue}
                    onChange={(e) => {this.setState({ inputValue: e.target.value })}}
                    onKeyPress={(e) => {
                            if(this.props.addSearchTerm(this.props.searchObject, e))
                                this.setState({ inputValue : ''}) }
                    }
                />

                {this.props.searchObject.terms.length > 0 && <br></br>}
                <ul style={logic === SearchLogic.CONTAINING ?
                    { "color": "#00994d" } : { "color": "#990000" }}>
                    {this.props.searchObject.terms.map((word, i) => {
                        return (
                            <li key={i}>
                                {word + "  "}
                                <Glyphicon onClick={(e) => {
                                    this.setState({ inputValue : ''})
                                    this.props.removeSearchTerm(this.props.searchObject, word)}} glyph="remove" />
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}

