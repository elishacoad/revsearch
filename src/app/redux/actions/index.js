export const updatePaper = paper =>
    ({
        type: 'PAPER_UPDATED',
        payload: paper,
    });

export const setCorpus = originalPapers =>
    ({
        type: 'CORPUS_SET',
        payload: originalPapers,
    });

export const updateFilter = updateObject =>
    ({
        type: 'DECISIONFILTER_UPDATED',
        payload: updateObject,
    });

export const updateHighlightwords = updateObject =>
    ({
        type: 'HIGHLIGHTWORDS_UPDATED',
        payload: updateObject,
    });

export const updateSearchgroups = updateObject =>
    ({
        type: 'SEARCHGROUPS_UPDATED',
        payload: updateObject,
    });

export const incrementRow = updateObject =>
    ({
        type: 'INCREMENT_ROW',
        payload: updateObject,
    });

export const selectRow = updateObject =>
    ({
        type: 'ROW_SELECTED',
        payload: updateObject,
    });

export const addSearchgroups = newGroup =>
    ({
        type: 'SEARCHGROUP_ADDED',
        payload: newGroup,
    });
