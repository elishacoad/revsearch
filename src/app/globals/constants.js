export const Decision = Object.freeze({
    NONE: "none",
    INCLUDE: "include",
    MAYBE: "maybe",
    EXCLUDE: "exclude"
});

export const Colors = Object.freeze({
    INCLUDE: "#83ddb2",
    DARKINCLUDE: "#00994d",
    MAYBE: "#cde9ff",
    NONE: "lightgray",
    DARKNONE: "gray",
    DARKMAYBE: "#004d99",
    EXCLUDE: "#eeab9e",
    DARKEXCLUDE: "#990000",
    REVNAVY: "#294777",
    REVBACKGROUND: "#f0f0f0",
    PAPERBACKGROUND: "#dfdfdf"
});

export const PaperFields = Object.freeze({
    ALL: "ALL",
    TITLE: "TITLE",
    ABSTRACT: "ABSTRACT"
});

export const SearchLogic = Object.freeze({
    CONTAINING: "CONTAINING",
    NOTCONTAINING: "NOTCONTAINING"
});

export const SearchGroupAttributes = Object.freeze({
    FIELD : "field",
    LOGIC : "logic",
});

export const logicalToDisplayName = {
    [PaperFields.ALL]: "Any Field",
    [PaperFields.TITLE]: "Title",
    [PaperFields.ABSTRACT]: "Abstract",
    [SearchLogic.CONTAINING]: "Containing",
    [SearchLogic.NOTCONTAINING]: "Not Containing"
}