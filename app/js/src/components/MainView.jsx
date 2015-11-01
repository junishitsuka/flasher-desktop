import React, { Component } from "react";
import SideBar from "./SideBar.jsx";
import NoteList from "./NoteList.jsx";
import SelectedNote from "./SelectedNote.jsx";

export default class MainView extends Component {
    render() {
        const { note, selected } = this.props.state;

        return (
            <div>
                <SideBar />
                <NoteList list={ note } />
                <SelectedNote note={ note[selected] } />
            </div>
        );
    }
}
