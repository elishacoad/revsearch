export const updatePaper = (paper) => {
    return {
        type: 'PAPER_UPDATED',
        payload: paper
    }
};

export const setCorpus = (originalPapers) => {
    return {
        type: 'CORPUS_SET',
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
