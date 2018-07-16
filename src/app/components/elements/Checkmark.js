

import React from 'react';

class Checkmark extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            checked: props.checked || false,
            color: props.color ? props.color : 'default',
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
        // only when mouse click should we lose focus
        if (e.detail === 1) {
            this.setState({
                focus: '',
            });
        }
    }

    handleCheckboxFocus() {
        this.setState({
            focus: 'focus-on',
        });
    }

    handleCheckboxUnfocus() {
        this.setState({
            focus: '',
        });
    }

    render() {
        return (
            <div className="checkmark">
                <button
                    className={`rev-button checkmark-button ${this.state.focus} ${this.state.color} ${this.state.checked ? 'enabled' : 'disabled'}`}
                    onClick={(e) => { this.handleCheckboxClick(e); }}
                    onFocus={() => { this.handleCheckboxFocus(); }}
                    onBlur={() => { this.handleCheckboxUnfocus(); }}
                >
                    {this.state.checked ? '\u2713' : ''}
                </button>
                {this.props.label}
            </div>
        );
    }
}

export default Checkmark;
