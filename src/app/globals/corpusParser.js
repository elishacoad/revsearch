/*
Parsing for a specific type of formatting.
Parsing assumptions: a paper starts with '%0 Journal Article' and ends with '%G'
The beginning of a new section in a paper starts with one of the deliminators shown below
and each section ends with a newline character (using \n).
*/

import { Decision } from './constants';

const SECTION_DELIMITERS = {
    0: 'type',
    A: 'author',
    V: 'volume',
    '@': 'issn',
    N: 'issue',
    9: 'articletype',
    D: 'publishingdate',
    T: 'title',
    B: 'journalname',
    '!': 'alternatetitle',
    R: 'fulltextlink',
    M: 'accessionnumber',
    X: 'abstract',
    '~': 'databasename',
    g: 'language',
    '+': 'authoraddress',
    K: 'keywords',
    W: 'databaseprovider',
};

const parsePaper = (papertext) => {
    /*
    Found match, group 0: %0 Journal Article
    Found match, group 1: 0
    Found match, group 2: Journal Article
    Found match, group 0: %D 2016
    Found match, group 1: D
    Found match, group 2: 2016
    */
    const regex = /^\s*%\s*(.)\s*(.*)/gm;
    let m;
    let sectionheader;
    const paper = {};
    // eslint-disable-next-line
    while ((m = regex.exec(papertext)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex += 1;
        }
        // The result can be accessed through the `m`-variable.
        // eslint-disable-next-line
        m.forEach((match, groupIndex) => {
            // eslint-disable-next-line
            if (groupIndex === 1) {
                sectionheader = SECTION_DELIMITERS[match] || 'unknownheader';
            } else if (groupIndex === 2) {
                paper[sectionheader] = match;
            }
        });
    }
    paper.decision = Decision.NONE;
    return paper;
};

const parseCorpus = (text) => {
    const corpus = text;
    const regex = /%0[\s\S]*?(?=%G)/gm; // to see how this matches, use regex101.com
    let m;
    const papers = [];
    // eslint-disable-next-line
    while ((m = regex.exec(corpus)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex += 1;
        }

        // The result can be accessed through the `m`-variable.
        // eslint-disable-next-line
        m.forEach((match, groupIndex) => {
            papers.push(parsePaper(match));
        });
    }
    return papers.length > 100 ? papers.slice(0, 100) : papers;
};

export default parseCorpus;
