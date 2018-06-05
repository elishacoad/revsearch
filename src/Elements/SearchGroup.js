import React from 'react'
import { Glyphicon } from 'react-bootstrap';
import { FormElement } from './FormElement'
import { PaperFields, SearchLogic } from '../Constants'
import { DropdownElement } from './DropdownElement'
import { logicalToDisplayName } from './helper'

export const SearchGroup = (props) => {
    let field = props.searchObject.field
    let logic = props.searchObject.logic

    return (                    
        <div>
            <hr></hr>
            <DropdownElement
                bstyle="default"
                title={logicalToDisplayName[field]}
                id="searchgroup-field-select"
                items={PaperFields}
                onSelect={choice => {
                    let newSearchObject = props.searchObject
                    newSearchObject.field = PaperFields[choice]
                    props.editSearch(newSearchObject);
            }}/>

            <DropdownElement
                bstyle="default"
                title={logicalToDisplayName[logic]}
                id="searchgroup-logic-select"
                items={SearchLogic}
                onSelect={choice => {
                    let newSearchObject = props.searchObject
                    newSearchObject.logic = SearchLogic[choice]
                    props.editSearch(newSearchObject);
            }}/>

            <FormElement
                type="text"
                placeholder="+ add word"
                value={props.newInput}
                onChange={props.onInputChange}
                onKeyPress={(e) => {props.addSearchTerm(props.searchObject, e)}}
            />

            {props.searchObject.terms.length > 0 && <br></br>}
            <ul style={logic === SearchLogic.CONTAINING ?
                { "color": "#00994d" } : { "color": "#990000" }}>
                {props.searchObject.terms.map((word, i) => {
                    return (
                        <li key={i}>
                            {word + "  "}
                            <Glyphicon onClick={(e) => {props.removeSearchTerm(props.searchObject, word)}} glyph="remove" />
                        </li>
                    );
                })}
            </ul>
        </div>)
}