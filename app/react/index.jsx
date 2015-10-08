import React from "react"
import sqlite3 from "sqlite3"

var notes = [
{
    title: "sample1",
    desc: "内容",
    created_at: "2015-08-11 00:11:11",
    updated_at: "2015-09-01 22:12:22"
},
{
    title: "sample2",
    desc: "内容",
    created_at: "2015-09-11 00:11:11",
    updated_at: "2015-10-01 22:12:22"
}]

var sqlite = sqlite3.verbose()
var db = new sqlite.Database("flasher-desktop.db")

db.serialize(function() {
    // create table
    // db.run("CREATE TABLE notes (title TEXT, desc TEXT, created_at TEXT, updated_at TEXT)")

    // insert data
    // var stmt = db.prepare("INSERT INTO notes VALUES (?, ?, ?, ?)")
    // notes.forEach(function(v) {
    //     stmt.run(v.title, v.desc, v.created_at, v.updated_at)
    // })
    // stmt.finalize() // finalizeしないとコミットが遅れる場合がある

    db.each("SELECT rowid AS id, title FROM notes", function(err, row) {
        console.log(row)
    });
});

db.close()

var Note = React.createClass({
    render: function() {
        var note = this.props.note
        return (
            <div className="email-item email-item-selected pure-g">
                <div className="pure-u-3-4">
                    <h4 className="email-subject">{note.title}</h4>
                    <p className="email-desc">
                    {note.created_at}
                    </p>
                </div>
            </div>
        )
    }
})

var NoteList = React.createClass({
    render: function() {
        var lists = notes.map(function(note) {
            return (<Note key={note.id} note={note}></Note>)
        })
        return (
            <div>
                {lists}
            </div>
        )
    }
})

var MenuList = React.createClass({
    render: function() {
        return (
            <div>
                <ul className="pure-menu-list">
                    <li className="pure-menu-item">
                        <a href="#" className="pure-menu-link">
                            Notes <span className="email-count">({notes.length})</span>
                        </a>
                    </li>
                    <li className="pure-menu-item">
                        <a href="#" className="pure-menu-link">Star</a>
                    </li>
                    <li className="pure-menu-item">
                        <a href="#" className="pure-menu-link">Trash</a>
                    </li>
                </ul>
            </div>
        )
    }
})

var SelectedNote = React.createClass({
    render: function() {
        var selected = notes[0]
        return (
            <div className="email-content">
                <div className="email-content-header pure-g">
                    <div className="pure-u-1-2">
                        <h1 className="email-content-title">{selected.title}</h1>
                        <p className="email-content-subtitle">
                        at <span>{selected.created_at}</span>
                        </p>
                    </div>

                    <div className="email-content-controls pure-u-1-2">
                        <button className="secondary-button pure-button">Star</button>
                        <button className="secondary-button pure-button">Delete</button>
                    </div>
                </div>

                <div className="email-content-body">
                    <p>
                        {selected.desc}
                    </p>
                </div>
            </div>
        )
    }
})

React.render(<NoteList />, document.querySelector("#notelist"))
React.render(<MenuList />, document.querySelector("#menulist"))
React.render(<SelectedNote />, document.querySelector("#selectednote"))
