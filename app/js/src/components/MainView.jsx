import React, { Component } from "react";
import SideBar from "./SideBar.jsx";
import NoteList from "./NoteList.jsx";
import SelectedNote from "./SelectedNote.jsx";

export default class MainView extends Component {
    render() {
        const { note, noteId } = this.props.state;

        return (
            <div>
                <SideBar onClick={() => this.props.pushNewButton()} />
                <NoteList note={ note } noteId={ noteId } selectNote={ this.props.selectNote } />
                <SelectedNote note={ note.filter((n) => n.id == noteId)[0] } />
            </div>
        );
    }
}
