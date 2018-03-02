// for a specific type of formattting
// parsing assumptions: a paper starts with "%0 Journal Article" and ends with "%G"
// The beginning of a new section in a paper starts with one of the deliminators
// shown below, and each section ends with a newline character (using \n) for now

const SECTION_DELIMITERS = {
    "0": "type",
    "A": "author",
    "V": "volume",
    "@": "issn",
    "N": "issue",
    "9": "articletype",
    "D": "publishingdate",
    "T": "title",
    "B": "journalname",
    "!": "alternatetitle",
    "R": "fulltextlink",
    "M": "accessionnumber",
    "X": "abstract",
    "~": "databasename",
    "g": "language",
    "+": "authoraddress",
    "K": "keywords",
    "W": "databaseprovider"
};

// eslint-disable-next-line
function parseCorpus() {
    const regex = /%0[\s\S]*?(?=%G)/gm; // to see how this matches, use regex101.com
    const corpus =
        `%0 Journal Article
    %D 2016
    %T Characteristics of patients with type 2 diabetes mellitus newly treated with GLP-1 receptor agonists (CHADIG Study): A cross-sectional multicentre study in Spain
    %B BMJ Open. 6 (7) (no pagination), 2016. Article Number: e010197. Date of Publication: 01 Jul 2016.
    %! Characteristics of patients with type 2 diabetes mellitus newly treated with GLP-1 receptor agonists (CHADIG Study): A cross-sectional multicentre study in Spain
    %R http://dx.doi.org/10.1136/bmjopen-2015-010197
    %M CN-01196504
    %X Objective: Objective: Several glucagon-like peptide-1 (GLP-1) receptor agonists (GLP-1Ra) have been made recently available in Spain for type 2 diabetes mellitus (DM2) treatment. There are no published data on the clinical and sociodemographic profile of patients initiating treatment with GLP-1Ra in Spain. Our objective was to understand these patients' characteristics in a real-world clinical practice setting. Design: Cross-sectional observational study. Setting: Spanish specialist outpatient clinics. Participants: 403 adults with DM2 initiating GLP-1Ra treatment were included. Primary and secondary outcome measures: Sociodemographic and DM2-related clinical data, including treatment at and after GLP-1Ra initiation and comorbidities, were collected. Results: Evaluable patients (n=403; 50.9% female) were included (July 2013 to March 2014) at 24 centres by 53 specialists (47 endocrinology, 6 internal medicine), with the following profile (value+/-SD): age (58.3+/-10.4 years), diabetes duration (9.9+/-7 years), body mass index (BMI; 36.2+/-5.5) and glycated haemoglobin (HbA1c; 8.4+/-1.4%); 14% had HbA1c<7%. Previous antidiabetic treatment: 53.8% only oral antidiabetic drugs (OADs), 5.2% insulin and 40% insulin and OAD; of those receiving OAD, 35% single drug, 38.2% 2 drugs and 24% 3 drugs. Concomitant to GLP-1Ra, 55.3% were only on OAD, 36.2% on insulin and OAD, and 7.2% only on insulin. Of those receiving OAD, the GLP-1Ra was mainly associated with 1 drug (65%) or 2 drugs (31.8%). GLP-1Ra are frequently added to existing antidiabetic drugs, with dipeptidyl peptidase-4 inhibitors being the OAD most frequently switched (45% receiving 1 before starting GLP-1Ra, only 2.7% receiving it concomitantly). Conclusions: In Spain, GLP-1Ra therapy is usually started in combination with OADs or OADs and insulin. These drugs are used in relatively young patients often not reaching therapeutic goals with other treatment combinations, roughly a decade after diagnosis and with a relatively high BMI. The latter could be explained by Spanish regional payers limiting reimbursed prescription to patients with a minimum BMI threshold (>30 in most regions, >35 in some). Copyright © 2016, BMJ Publishing Group. All rights reserved.
    %~ CENTRAL
    %G eng

    %0 Journal Article
    %D 2016
    %T Characteristics of patients with type 2 diabetes mellitus newly treated with GLP-1 receptor agonists (CHADIG Study): A cross-sectional multicentre study in Spain
    %B BMJ Open. 6 (7) (no pagination), 2016. Article Number: e010197. Date of Publication: 01 Jul 2016.
    %! Characteristics of patients with type 2 diabetes mellitus newly treated with GLP-1 receptor agonists (CHADIG Study): A cross-sectional multicentre study in Spain
    %R http://dx.doi.org/10.1136/bmjopen-2015-010197
    %M CN-01196504
    %X Objective: Objective: Several glucagon-like peptide-1 (GLP-1) receptor agonists (GLP-1Ra) have been made recently available in Spain for type 2 diabetes mellitus (DM2) treatment. There are no published data on the clinical and sociodemographic profile of patients initiating treatment with GLP-1Ra in Spain. Our objective was to understand these patients' characteristics in a real-world clinical practice setting. Design: Cross-sectional observational study. Setting: Spanish specialist outpatient clinics. Participants: 403 adults with DM2 initiating GLP-1Ra treatment were included. Primary and secondary outcome measures: Sociodemographic and DM2-related clinical data, including treatment at and after GLP-1Ra initiation and comorbidities, were collected. Results: Evaluable patients (n=403; 50.9% female) were included (July 2013 to March 2014) at 24 centres by 53 specialists (47 endocrinology, 6 internal medicine), with the following profile (value+/-SD): age (58.3+/-10.4 years), diabetes duration (9.9+/-7 years), body mass index (BMI; 36.2+/-5.5) and glycated haemoglobin (HbA1c; 8.4+/-1.4%); 14% had HbA1c<7%. Previous antidiabetic treatment: 53.8% only oral antidiabetic drugs (OADs), 5.2% insulin and 40% insulin and OAD; of those receiving OAD, 35% single drug, 38.2% 2 drugs and 24% 3 drugs. Concomitant to GLP-1Ra, 55.3% were only on OAD, 36.2% on insulin and OAD, and 7.2% only on insulin. Of those receiving OAD, the GLP-1Ra was mainly associated with 1 drug (65%) or 2 drugs (31.8%). GLP-1Ra are frequently added to existing antidiabetic drugs, with dipeptidyl peptidase-4 inhibitors being the OAD most frequently switched (45% receiving 1 before starting GLP-1Ra, only 2.7% receiving it concomitantly). Conclusions: In Spain, GLP-1Ra therapy is usually started in combination with OADs or OADs and insulin. These drugs are used in relatively young patients often not reaching therapeutic goals with other treatment combinations, roughly a decade after diagnosis and with a relatively high BMI. The latter could be explained by Spanish regional payers limiting reimbursed prescription to patients with a minimum BMI threshold (>30 in most regions, >35 in some). Copyright © 2016, BMJ Publishing Group. All rights reserved.
    %~ CENTRAL
    %G eng`;
    let m;
    let papers = [];
    // eslint-disable-next-line
    while ((m = regex.exec(corpus)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        // eslint-disable-next-line
        m.forEach((match, groupIndex) => {
            papers.push(parsePaper(match));
        });
    }
    return papers;
}

function parsePaper(papertext) {
    /*
    Found match, group 0: %0 Journal Article
    Found match, group 1: 0
    Found match, group 2: Journal Article
    Found match, group 0: %D 2016
    Found match, group 1: D
    Found match, group 2: 2016
    */
    //console.log("papertext " + papertext)
    const regex = /^\s*%\s*(.)\s*(.*)/gm;
    let m;
    let sectionheader;
    let paper = {};
    // eslint-disable-next-line
    while ((m = regex.exec(papertext)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        // The result can be accessed through the `m`-variable.
        // eslint-disable-next-line
        m.forEach((match, groupIndex) => {
            // eslint-disable-next-line
            if (groupIndex === 1) {
                sectionheader = SECTION_DELIMITERS[match] || "unknownheader";
            }
            else if (groupIndex === 2) {
                paper[sectionheader] = match;
            }
        });
    }
    return paper;
}

export {parseCorpus, parsePaper};
