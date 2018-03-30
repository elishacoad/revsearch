import { Checkbox, FormControl, Glyphicon, Panel } from 'react-bootstrap';
import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateFilter } from '../../../../../Actions';

class FilterForm extends Component {
    constructor(props, context) {
        super(props, context);

        this.addIncludeWord = this.addIncludeWord.bind(this);
        this.addExcludeWord = this.addExcludeWord.bind(this);

        this.state = {
            includeWords: [],
            excludeWords: []
        };
    }

    addIncludeWord(e) {
        if(e.charCode==13){
            let includes = this.state.includeWords;
            includes.push(e.target.value);
            this.setState({ value: '' });
            this.setState({ includeWords: includes });

        }
    }

    addExcludeWord(e) {
        let excludes = this.state.excludeWords;
        excludes.push(e.target.value);
        e.target.value = "";
        this.setState({ excludeWords: excludes });
    }

    render() {
        return (
            <Panel id="accordion-example" defaultExpanded>
                <Panel.Heading>
                    <Panel.Title toggle>Filter</Panel.Title>
                </Panel.Heading>
                <Panel.Collapse>
                    <Panel.Body collapsible defaultExpanded>
                        <Checkbox defaultChecked
                            onChange={(e) => this.props.updateFilter({ showIncludes: e.target.checked })}>
                            Show Includes
                        </Checkbox>
                        <Checkbox defaultChecked
                            onChange={(e) => this.props.updateFilter({ showExcludes: e.target.checked })}>
                            Show Excludes
                        </Checkbox>
                        <Checkbox defaultChecked
                            onChange={(e) => this.props.updateFilter({ showMaybes: e.target.checked })}>
                            Show Maybes
                        </Checkbox>
                        <Checkbox defaultChecked
                            onChange={(e) => this.props.updateFilter({ showUndecided: e.target.checked })}>
                        </Checkbox>
                        <Glyphicon glyph="plus" />Inclusion
                        <FormControl
                            type="text"
                            value={this.state.value}
                            placeholder="Add new keyword"
                            onKeyPress={this.addIncludeWord}
                        />
                        <Glyphicon glyph="plus" />
                        <Glyphicon glyph="minus" />Excludes
                        <FormControl
                            type="text"
                            value={this.state.value}
                            placeholder="Add new keyword"
                            onClick={this.addExcludeWord}
                        />
                        <ul>
                            {this.state.includeWords.map((includeWord) => {
                                return <li>{includeWord}</li>;
                            })
                            }
                        </ul>
                    </Panel.Body>
                </Panel.Collapse>
            </Panel>
        );
    }
}

function mapStateToProps(state) {
    return {}
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ updateFilter: updateFilter }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(FilterForm);
