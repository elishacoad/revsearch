export const changeDecision = (paper) => {
    console.log("You clicked on change decision: ", paper.decision);
    return {
        type: 'DECISION_CHANGED',
        payload: paper
    }
};

export const addCorpusAction = (papers) => {
    console.log("You added " + papers.length + "papers");
    return {
        type: 'CORPUS_ADDED',
        payload: papers
    }
};

