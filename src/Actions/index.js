export const changeDecision = (paper) => {
    return {
        type: 'DECISION_CHANGED',
        payload: paper
    }
};

export const addCorpusAction = (papers) => {
    return {
        type: 'CORPUS_ADDED',
        payload: papers
    }
};

export const updateFilter = (updateObject) => {
    return {
        type: 'DECISIONFILTER_UPDATED',
        payload: updateObject
    }
};

export const updateKeywords = (updateObject) => {
    return {
        type: 'KEYWORDS_UPDATED',
        payload: updateObject
    }
};

export const updateSearchwords = (updateObject) => {
    return {
        type: 'SEARCHWORDS_UPDATED',
        payload: updateObject
    }
};


export const incrementRow = (updateObject) => {
    return {
        type: 'INCREMENT_ROW',
        payload: updateObject
    }
};

export const selectRow = (updateObject) => {
    return {
        type: 'ROW_SELECTED',
        payload: updateObject
    }
};