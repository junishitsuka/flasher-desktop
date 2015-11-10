export const PUSH_NEW_BUTTON = "PUSH_NEW_BUTTON";
export function pushNewButton() {
    return {
        type: PUSH_NEW_BUTTON
    };
};

export const SELECT_NOTE = "SELECT_NOTE";
export function selectNote(noteId) {
    return {
        type: SELECT_NOTE,
        noteId: noteId
    };
};

export const UPDATE_SELECTED_TITLE = "UPDATE_SELECTED_TITLE";
export function updateSelectedTitle(e) {
    return {
        type: UPDATE_SELECTED_TITLE,
        text: e.target.value
    };
};

export const UPDATE_SELECTED_DESC = "UPDATE_SELECTED_DESC";
export function updateSelectedDesc(e) {
    return {
        type: UPDATE_SELECTED_DESC,
        text: e.target.value
    };
};
