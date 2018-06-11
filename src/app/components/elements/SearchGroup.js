/** 
 * Search group UI element displays the search group defined by a user
 * controls the input value whenever a user finishes typing an element.
 */
import React from 'react'
import { ButtonGroup } from 'react-bootstrap';

import { DropdownElement, FormElement, Keywords } from '../elements'
import { SearchGroupAttributes, SearchLogic, PaperFields, logicalToDisplayName } from '../../globals/constants'

export class SearchGroup extends React.Component {
    constructor() {
        super()
        this.state = {
            inputValue: ''
        }

        this.clearInput = this.clearInput.bind(this)
    }

    clearInput() {
        this.setState({ inputValue: '' })
    }

    render() {
        let field = this.props.searchObject.field
        let logic = this.props.searchObject.logic

        return (
            <div>
                <hr></hr>

                <ButtonGroup justified>
                    <DropdownElement
                        bstyle="default"
                        title={logicalToDisplayName[field]}
                        id="searchgroup-field-select"
                        items={PaperFields}
                        onSelect={choice =>
                            this.props.editSearch(this.props.searchObject, SearchGroupAttributes.FIELD, PaperFields, choice)
                        }
                    />

                    <DropdownElement
                        bstyle="default"
                        title={logicalToDisplayName[logic]}
                        id="searchgroup-logic-select"
                        items={SearchLogic}
                        onSelect={choice => {
                            this.props.editSearch(this.props.searchObject, SearchGroupAttributes.LOGIC, SearchLogic, choice)
                        }}
                    />
                </ButtonGroup>

                <FormElement
                    type="text"
                    placeholder="+ add word"
                    value={this.state.inputValue}
                    onChange={(e) => { this.setState({ inputValue: e.target.value }) }}
                    onKeyPress={(e) => {
                        if (this.props.addSearchTerm(this.props.searchObject, e))
                            this.setState({ inputValue: '' })
                    }}
                />

                <Keywords
                    searchObject={this.props.searchObject}
                    removeSearchTerm={this.props.removeSearchTerm}
                    clearInput={this.clearInput}
                />

            </div>
        )
    }
}

