import { Colors, Decision, SearchLogic, PaperFields } from './constants';

/**
 * zip: zip n arrays that are m length into an array of dimension n x m
 * ie: zip([[1, 2, 3], [4, 5, 6]]) -> [[1, 4], [2, 5], [3, 6]]
*/
export const zip = arrays => arrays[0].map((_, i) => arrays.map(array => array[i]));

/**
 *  Make an array of option objects to pass to DecisionButtonGroup
 *  where each object is {buttoncolor, clickvalue, displayvalue}.
 *  - buttoncolor: the color of the button
 *  - decisionvalue: the value that the paper.decision will be updated to
 *  - displayvalue: the word to show in the button
*/
export const buildOptionObjects = () => {
    const decisionvalues = [Decision.INCLUDE, Decision.EXCLUDE, Decision.MAYBE, Decision.NONE];
    const colors = [Colors.INCLUDE, Colors.EXCLUDE, Colors.MAYBE, Colors.NONE];
    const displayvalues = ['Include', 'Exlude', 'Maybe', 'Undecided'];
    return zip([colors, decisionvalues, displayvalues])
        .map(option =>
            ({
                buttoncolor: option[0],
                decisionvalue: option[1],
                displayvalue: option[2],
            }));
};

/**
 *  Count how many papers of each paper-decision there are in the corpus.
*/
export const tallyDecisions = (papers) => {
    let includes = 0;
    let excludes = 0;
    let maybes = 0;
    papers.forEach((paper) => {
        switch (paper.decision) {
            case Decision.INCLUDE:
                includes += 1;
                break;
            case Decision.EXCLUDE:
                excludes += 1;
                break;
            case Decision.MAYBE:
                maybes += 1;
                break;
            case Decision.NONE:
                break;
            default:
                break;
        }
    });
    return {
        includes,
        excludes,
        maybes,
        undecided: papers.length - (includes + excludes + maybes),
        total: papers.length,
    };
};

/**
 * Get a percent by dividing part/total or returning 0 if total is 0.
*/
export const percent = (part, total) => (total === 0 ? 0 : (part / total) * 100);

/**
 * Decide if a paper should be displayed according to a given search group.
*/
export const matchesGroupCriteria = (paper, group) => {
    // Apply the logic for the search group to a given string
    const applyGroupLogic = (searchText) => {
        switch (group.logic) {
            case SearchLogic.CONTAINING:
                return group.terms.every(term => searchText.includes(term));
            case SearchLogic.NOTCONTAINING:
                return group.terms.every(term => !searchText.includes(term));
            default:
                return [];
        }
    };
    switch (group.field) {
        case PaperFields.ALL:
            return applyGroupLogic(Object.values(paper).join(' '), group);
        case PaperFields.TITLE:
            return applyGroupLogic(paper.title, group);
        case PaperFields.ABSTRACT:
            return applyGroupLogic(paper.abstract, group);
        default:
            return [];
    }
};
