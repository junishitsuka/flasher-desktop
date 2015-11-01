import { PUSH_NEW_BUTTON } from "../actions/RootAction";

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
    note: note
};

export default function RootReducer(state = initialState, action) {
    switch (action.type) {
    case PUSH_NEW_BUTTON:
        return Object.assign({}, state, {
            count: state.count + 1
        });
    default:
        return state;
    }
};
