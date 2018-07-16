export const Decision = Object.freeze({
    NONE: 'none',
    INCLUDE: 'include',
    MAYBE: 'maybe',
    EXCLUDE: 'exclude',
});

export const Colors = Object.freeze({
    INCLUDE: 'green',
    MAYBE: 'default',
    NONE: 'gray',
    EXCLUDE: 'red',
});

export const PaperFields = Object.freeze({
    ALL: 'ALL',
    TITLE: 'TITLE',
    ABSTRACT: 'ABSTRACT',
});

export const SearchLogic = Object.freeze({
    CONTAINING: 'CONTAINING',
    NOTCONTAINING: 'NOTCONTAINING',
});

export const SearchGroupAttributes = Object.freeze({
    FIELD: 'field',
    LOGIC: 'logic',
});

export const RevNavbarEventKeys = Object.freeze({
    TOOLS: {
        DOWNLOAD: 1,
    },
});

export const logicalToDisplayName = {
    [PaperFields.ALL]: 'Any Field',
    [PaperFields.TITLE]: 'Title',
    [PaperFields.ABSTRACT]: 'Abstract',
    [SearchLogic.CONTAINING]: 'Containing',
    [SearchLogic.NOTCONTAINING]: 'Not Containing',
};

export const ENDNOTE_SECTION_DELIMITERS = {
    type: '0',
    author: 'A',
    volume: 'V',
    issn: '@',
    issue: 'N',
    articletype: '9',
    publishingdate: 'D',
    title: 'T',
    journalname: 'B',
    alternatetitle: '!',
    fulltextlink: 'R',
    accessionnumber: 'M',
    abstract: 'X',
    databasename: '~',
    language: 'g',
    authoraddress: '+',
    keywords: 'K',
    databaseprovider: 'W',
};

export const PAPER_FIELDS = ['type', 'title', 'author', 'volume', 'issn', 'issue', 'articletype', 'publishingdate', 'journalname', 'alternatetitle', 'fulltextlink', 'accessionnumber', 'abstract', 'databasename', 'language', 'authoraddress', 'keywords', 'databaseprovider'];

export const DEFAULT_DOWNLOAD_FILENAME = Object.freeze('revsearch_papers');
