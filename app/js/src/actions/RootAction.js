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
