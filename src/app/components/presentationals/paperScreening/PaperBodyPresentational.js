import { Col, Row } from 'react-bootstrap';

import DecisionButtonGroup from '../../elements/DecisionButtonGroup';
import Highlighter from 'react-highlight-words';
import React from 'react';

const PaperBodyPresentational = (props) => {
    return (
        <Row>
            <Col xs={12} sm={10}>
                <div className='paperbody'>
                    <h5>
                        <Highlighter
                            highlightClassName='highlight-good'
                            searchWords={props.highlightWords.positiveWords}
                            autoEscape={true}
                            textToHighlight={props.paper.title}
                        />
                    </h5>
                    <hr></hr>
                    <Highlighter
                        highlightClassName='highlight-good'
                        searchWords={props.highlightWords.positiveWords}
                        autoEscape={true}
                        textToHighlight={props.paper.abstract}
                    />
                </div>
                {props.paper.fulltextlink && (
                    <a
                        href={props.paper.fulltextlink}
                        target='_blank'
                        style={{ 'fontstyle': 'italic' }}
                    >
                        Link to Article
                    </a>
                )}
            </Col>
            <Col xs={12} sm={2}>
                <DecisionButtonGroup
                    handleDecisionButtonClick={props.handleDecisionButtonClick}
                    options={props.options}
                />
            </Col>
        </Row>
    );
}

export default PaperBodyPresentational;