/*
Parsing for a specific type of formatting.
Parsing assumptions: a paper starts with "%0 Journal Article" and ends with "%G"
The beginning of a new section in a paper starts with one of the deliminators shown below
and each section ends with a newline character (using \n).
*/

import { Decision } from '../../../Constants';

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

const dummypapers = `%0 Journal Article
%D 2016
%T Characteristics of patients with type 2 diabetes mellitus newly treated with GLP-1 receptor agonists (CHADIG Study): A cross-sectional multicentre study in Spain
%B BMJ Open. 6 (7) (no pagination), 2016. Article Number: e010197. Date of Publication: 01 Jul 2016.
%! Characteristics of patients with type 2 diabetes mellitus newly treated with GLP-1 receptor agonists (CHADIG Study): A cross-sectional multicentre study in Spain
%R http://dx.doi.org/10.1136/bmjopen-2015-010197
%M CN-01196504
%X Objective: Several glucagon-like peptide-1 (GLP-1) receptor agonists (GLP-1Ra) have been made recently available in Spain for type 2 diabetes mellitus (DM2) treatment. There are no published data on the clinical and sociodemographic profile of patients initiating treatment with GLP-1Ra in Spain. Our objective was to understand these patients' characteristics in a real-world clinical practice setting. Design: Cross-sectional observational study. Setting: Spanish specialist outpatient clinics. Participants: 403 adults with DM2 initiating GLP-1Ra treatment were included. Primary and secondary outcome measures: Sociodemographic and DM2-related clinical data, including treatment at and after GLP-1Ra initiation and comorbidities, were collected. Results: Evaluable patients (n=403; 50.9% female) were included (July 2013 to March 2014) at 24 centres by 53 specialists (47 endocrinology, 6 internal medicine), with the following profile (value+/-SD): age (58.3+/-10.4 years), diabetes duration (9.9+/-7 years), body mass index (BMI; 36.2+/-5.5) and glycated haemoglobin (HbA1c; 8.4+/-1.4%); 14% had HbA1c<7%. Previous antidiabetic treatment: 53.8% only oral antidiabetic drugs (OADs), 5.2% insulin and 40% insulin and OAD; of those receiving OAD, 35% single drug, 38.2% 2 drugs and 24% 3 drugs. Concomitant to GLP-1Ra, 55.3% were only on OAD, 36.2% on insulin and OAD, and 7.2% only on insulin. Of those receiving OAD, the GLP-1Ra was mainly associated with 1 drug (65%) or 2 drugs (31.8%). GLP-1Ra are frequently added to existing antidiabetic drugs, with dipeptidyl peptidase-4 inhibitors being the OAD most frequently switched (45% receiving 1 before starting GLP-1Ra, only 2.7% receiving it concomitantly). Conclusions: In Spain, GLP-1Ra therapy is usually started in combination with OADs or OADs and insulin. These drugs are used in relatively young patients often not reaching therapeutic goals with other treatment combinations, roughly a decade after diagnosis and with a relatively high BMI. The latter could be explained by Spanish regional payers limiting reimbursed prescription to patients with a minimum BMI threshold (>30 in most regions, >35 in some). Copyright © 2016, BMJ Publishing Group. All rights reserved.
%~ CENTRAL
%G eng



%0 Journal Article
%D 2016
%T Effects of vildagliptin relative to sulfonylureas in muslim patients with type 2 diabetes fasting during ramadan: Influence of age and treatment with/without metformin in the VIRTUE study
%B Diabetes, Metabolic Syndrome and Obesity: Targets and Therapy. 9 (pp 225-231), 2016. Date of Publication: 26 Jul 2016.
%! Effects of vildagliptin relative to sulfonylureas in muslim patients with type 2 diabetes fasting during ramadan: Influence of age and treatment with/without metformin in the VIRTUE study
%R http://dx.doi.org/10.2147/DMSO.S103692
%M CN-01194158
%X Background: VIRTUE was a prospective, observational study assessing the effectiveness and safety of vildagliptin vs sulfonylureas (SUs) (both as monotherapy and in combination with metformin) in patients with type 2 diabetes mellitus who fasted during Ramadan. A post hoc analysis was carried out to assess the effect of treatment with/without metformin and age (<65 years or >65 years). Patients and methods: Patients were recruited from the Middle East and Asia. The primary end point was proportion of patients with one or more hypoglycemic event (HE) during Ramadan. Secondary end points included change from baseline in glycated hemoglobin (HbA1c), body weight, and safety. Results: Overall, 684 patients received vildagliptin and 631 received SUs. Most patients received dual therapy with metformin (n=1,148) and were aged,65 years (n=1,189). A few patients experienced one or more HE with vildagliptin vs SU monotherapy (6.5% vs 14.5%) and with vildagliptin +/- metformin vs SUs + metformin (5.3% vs 20.6%); the latter achieved statistical significance (P,0.001) in both age subgroups (<65 years: 5.5% vs 18.4%, P,0.001; >65 years: 2.8% vs 30.9%, P,0.001). Vildagliptin was associated with numerically greater HbA1c and body weight reductions vs SUs, regardless of the therapy type or age. A higher proportion of SU-vs vildagliptin-treated patients experienced adverse events across all subgroups. Conclusion: A few patients experienced HEs with vildagliptin vs SUs regardless of age, and in patients on dual therapy. Vildagliptin +/- metformin was also associated with good glycemic and weight control and was well tolerated. Vildagliptin might be a useful treatment option for patients with type 2 diabetes mellitus, particularly high-risk populations such as the elderly fasting during Ramadan. Copyright © 2016 Hassoun et al.
%~ CENTRAL
%G eng



%0 Journal Article
%D 2016
%T The relationship of management modality in Saudi patients with type 2 diabetes to components of metabolic syndrome, gamma glutamyl transferase and highly sensitive C-reactive protein
%B Therapeutic Advances in Chronic Disease. 7 (5) (pp 246-254), 2016. Date of Publication: 01 Sep 2016.
%! The relationship of management modality in Saudi patients with type 2 diabetes to components of metabolic syndrome, gamma glutamyl transferase and highly sensitive C-reactive protein
%R http://dx.doi.org/10.1177/2040622316658459
%M CN-01194266
%X Background: The aim of this study was to investigate the relationship among management modality, glycemic control, components of metabolic syndrome (MS) and serum levels of gamma glutamyl transferase (GGT) and C-reactive protein (CRP) in patients with type 2 diabetes (T2DM). Methods: Patients with T2DM, not suffering from diabetes complications, were recruited from outpatients clinics at two hospitals in Jeddah. Anthropometric measurements and blood pressure (BP) were taken. A treatment plan was recorded. Fasting blood samples were obtained to measure glucose, glycated hemoglobin (HbA1c), lipids profile, highly sensitive (hs)-CRP and GGT. Results: A total of 71 men and 82 women were recruited. Lower mean HbA1c was found in people receiving oral glucose-lowering drugs compared with those on insulin therapy (p < 0.001). Management modality had no effect on mean GGT or hs-CRP. Higher mean GGT was associated with poor glycemic control, dyslipidemia, hypertension, and abdominal obesity. GGT correlated significantly (p < 0.05) and directly with triglycerides in men (r = 0.401) and diastolic BP (r = 0.279 for men, r = 0.194, for women), but inversely with high-density lipoprotein cholesterol (HDL-C) (r = -0.298 for men, r = -0.171 for women). hs-CRP correlated with waist circumference (p < 0.05, r = 0.312, for men, r = 0.305, for women), with a higher mean being found in men with poor glycemic control (p = 0.015), in hypertensive women (p = 0.030), and in patients who were abdominally obese (p < 0.05). Conclusions: High levels of GGT and hs-CRP are associated with components of MS and poor glycemic control, hence increased cardiovascular risk. Due to their value as independent risk predictors of vascular injury, these measures should be included in routine monitoring of patients with T2DM. Copyright © 2016, © The Author(s), 2016.
%~ CENTRAL
%G eng
`

export function parseCorpus(text) {
    let corpus = typeof text === "string" ? text : [dummypapers, dummypapers, dummypapers, dummypapers];
    const regex = /%0[\s\S]*?(?=%G)/gm; // to see how this matches, use regex101.com
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
    return papers.length > 100 ? papers.slice(0, 100) : papers;
}

export function parsePaper(papertext) {
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
    paper.decision = Decision.NONE;
    return paper;
}
