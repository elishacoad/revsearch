export const updatePaper = (paper) => {
    return {
        type: 'DECISION_CHANGED',
        payload: paper
    }
};

export const addCorpusAction = (originalPapers) => {
    return {
        type: 'CORPUS_ADDED',
        payload: originalPapers
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

export const updateSearchgroups = (updateObject) => {
    return {
        type: 'SEARCHGROUPS_UPDATED',
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

export const addSearchgroups = (newGroup) => {
    return {
        type: 'SEARCHGROUP_ADDED',
        payload: newGroup
    }
};
