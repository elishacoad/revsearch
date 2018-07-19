
import React from 'react';

class Button extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            color: props.color ? props.color : 'default',
            lg: props.lg ? 'lg' : '',
            focus: '',
        };

        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleButtonFocus = this.handleButtonFocus.bind(this);
        this.handleButtonUnfocus = this.handleButtonUnfocus.bind(this);
    }

    handleButtonClick(e) {
        e.preventDefault();
        this.props.onClick();
        // only on mouse click should we lose focus
        if (e.detail === 1) {
            this.setState({
                focus: '',
            });
        }
    }

    handleButtonFocus() {
        this.setState({
            focus: 'focus-on',
        });
    }

    handleButtonUnfocus() {
        this.setState({
            focus: '',
        });
    }

    render() {
        return (
            <button
                className={`rev-button enabled ${this.state.lg} ${this.state.focus} ${this.state.color}`}
                onClick={this.handleButtonClick}
                onFocus={this.handleButtonFocus}
                onBlur={this.handleButtonUnfocus}
            >
                {this.props.children}
            </button>
        );
    }
}

export default Button;
