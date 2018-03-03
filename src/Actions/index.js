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

