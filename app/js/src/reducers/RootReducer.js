import { PUSH_NEW_BUTTON } from "../actions/RootAction";
import moment from "../../../../node_modules/moment/min/moment.min";

var note = [
    {
        id: 1,
        title: "sample1",
        desc: "内容",
        created_at: "2015-08-11 00:11:11",
        updated_at: "2015-09-01 22:12:22"
    },
    {
        id: 2,
        title: "sample2",
        desc: "内容",
        created_at: "2015-09-11 00:11:11",
        updated_at: "2015-10-01 22:12:22"
    }
];

const initialState = {
    note: note,
    index: 0,
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
            title: "",
            desc: "",
            created_at: current,
            updated_at: current
        }];
        return Object.assign({}, state, {
            note: newNoteList.concat(state.note),
            count: count
        });
    default:
        return state;
    }
};
