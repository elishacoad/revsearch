import React from 'react'
import { SearchLogic } from "../Constants";
import { Glyphicon } from 'react-bootstrap';

export class Keywords extends React.Component {
    constructor (props) {
        super(props)

        this.chooseColor = this.chooseColor.bind(this)

        this.state = {
            color : this.chooseColor(this.props.searchObject.logic)
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            color : this.chooseColor(nextProps.searchObject.logic)
        })
    }

    chooseColor(logicField){
        if (logicField === SearchLogic.CONTAINING){
            console.log("containing")
            return 'green'
        }

        console.log("NOTcontaining")
        return 'red'
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
        )
    }
}
