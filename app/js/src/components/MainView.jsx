import React, { Component } from "react";
import SideBar from "./SideBar.jsx";
import NoteList from "./NoteList.jsx";

export default class MainView extends Component {
    render() {
        const { note } = this.props.state;

        return (
            <div>
                <SideBar />
                <NoteList list={note} />
            </div>
        );
    }
}
