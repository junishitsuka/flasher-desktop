import { PUSH_NEW_BUTTON, SELECT_NOTE } from "../actions/RootAction";
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
    default:
        return state;
    }
};
