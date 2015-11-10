import { PUSH_NEW_BUTTON, SELECT_NOTE, UPDATE_SELECTED_TITLE, UPDATE_SELECTED_DESC } from "../actions/RootAction";
import moment from "../../../../node_modules/moment/min/moment.min";

var note = [
    {
        id: 2,
        title: "sample2",
        desc: "内容",
        created_at: "2015-08-11 00:11:11",
        updated_at: "2015-09-01 22:12:22"
    },
    {
        id: 1,
        title: "sample1",
        desc: "内容",
        created_at: "2015-09-11 00:11:11",
        updated_at: "2015-10-01 22:12:22"
    }
];

const initialState = {
    note: note,
    noteId: 2,
    count: 2
};

export default function RootReducer(state = initialState, action) {
    switch (action.type) {
    case PUSH_NEW_BUTTON:
        var m = moment();
        var current = m.format("YYYY-MM-DD HH:mm:ss");
        var count = state.count + 1;
        var newNoteList = [{
            id: count,
            title: "New Note",
            desc: "",
            created_at: current,
            updated_at: current
        }];
        return Object.assign({}, state, {
            note: newNoteList.concat(state.note),
            noteId: count,
            count: count
        });
    case SELECT_NOTE:
        return Object.assign({}, state, {
            noteId: action.noteId
        });
    case UPDATE_SELECTED_TITLE:
        var index = getIndexById(state.note, state.noteId);
        var updateNote = state.note;
        updateNote[index].title = action.text
        return Object.assign({}, state, {
            note: updateNote
        });
    case UPDATE_SELECTED_DESC:
        var index = getIndexById(state.note, state.noteId);
        var updateNote = state.note;
        updateNote[index].desc = action.text
        return Object.assign({}, state, {
            note: updateNote
        });
    default:
        return state;
    }
};

function getIndexById(note, id) {
    for (var i = 0; i < note.length; i++) {
        if (note[i].id == id) {
            return i;
        }
    }
    return;
}
