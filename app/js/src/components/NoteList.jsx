import React, {Component} from "react";
import Note from "./Note.jsx";

export default class NoteList extends Component {
    render() {
        return (
            <div id="list" className="pure-u-1">
                {this.props.note.map((note) =>
                    <Note key={ note.id } noteId={ this.props.noteId } note={ note } selectNote={() => this.props.selectNote(note.id)} />
                )}
            </div>
        );
    }
}
