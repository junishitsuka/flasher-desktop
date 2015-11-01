import React, {Component} from "react";
import Note from "./Note.jsx";

export default class NoteList extends Component {
    render() {
        var lists = this.props.list.map(function(note) {
            return (<Note key={note.id} note={note}></Note>)
        })
        return (
            <div id="list" className="pure-u-1">
                {lists}
            </div>
        )
    }
}
