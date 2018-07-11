
/**
 * Search group UI element displays the search group defined by a user
 * controls the input value whenever a user finishes typing an element.
 */
import React from 'react';

class CheckboxButton extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            checked: props.checked || false,
            color: props.color ? props.color : 'default',
            lg: props.lg ? 'lg' : '',
            focus: '',
        };

        this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
        this.handleCheckboxFocus = this.handleCheckboxFocus.bind(this);
        this.handleCheckboxUnfocus = this.handleCheckboxUnfocus.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            checked: nextProps.checked || false,
        });
    }

    handleCheckboxClick(e) {
        e.preventDefault();
        this.props.handleChange(!this.state.checked);
        this.setState({
            focus: '',
        });
    }

    handleCheckboxFocus() {
        this.setState({
            focus: 'focusOn',
        });
    }

    handleCheckboxUnfocus() {
        this.setState({
            focus: '',
        });
    }

    render() {
        return (
            <button
                className={`rev-button checkbox-button ${this.state.lg} ${this.state.focus} ${this.state.color} ${this.state.checked ? 'enabled' : 'disabled'}`}
                onClick={(e) => { this.handleCheckboxClick(e); }}
                onFocus={() => { this.handleCheckboxFocus(); }}
                onBlur={() => { this.handleCheckboxUnfocus(); }}
            >
                {`${this.state.checked ? '\u2713' : ''}  ${this.props.label} (${this.props.count})`}
            </button>
        );
    }
}

export default CheckboxButton;
