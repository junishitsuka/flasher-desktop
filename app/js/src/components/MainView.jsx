import React, { Component } from "react";
import SideBar from "./SideBar.jsx";
import NoteList from "./NoteList.jsx";
import SelectedNote from "./SelectedNote.jsx";

export default class MainView extends Component {
    render() {
        const { note, index } = this.props.state;

        return (
            <div>
                <SideBar onClick={() => this.props.pushNewButton()} />
                <NoteList list={ note } />
                <SelectedNote note={ note[index] } />
            </div>
        );
    }
}
