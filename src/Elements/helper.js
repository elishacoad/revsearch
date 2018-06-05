import { PaperFields, SearchLogic } from '../Constants'

export const logicalNameToDisplayName = {
    'ALL': "Any Field",
    'TITLE': "Title",
    'ABSTRACT': "Abstract",
    'CONTAINING': "Containing",
    'NOTCONTAINING': "Not Containing"
}

export const logicalToDisplayName = {
    [PaperFields.ALL]: "Any Field",
    [PaperFields.TITLE]: "Title",
    [PaperFields.ABSTRACT]: "Abstract",
    [SearchLogic.CONTAINING]: "Containing",
    [SearchLogic.NOTCONTAINING]: "Not Containing"
}