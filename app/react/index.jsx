import React from 'react'

var notes = [
{
    id: 1,
    title: "sample1",
    content: "内容",
    created_at: "2015-08-11 00:11:11",
    updated_at: "2015-09-01 22:12:22"
},
{
    id: 2,
    title: "sample2",
    content: "内容",
    created_at: "2015-09-11 00:11:11",
    updated_at: "2015-10-01 22:12:22"
}]

var Note = React.createClass({
    render: function() {
        var note = this.props.note
        return (
            <li>{note.title} created_at:{note.created_at}</li>
        )
    }
})

var NoteList = React.createClass({
    render: function() {
        var lists = this.props.notes.map(function(note) {
            return (<Note key={note.id} note={note}></Note>)
        })
        return (
            <div class="notes">
                <ul>{lists}</ul>
            </div>
        )
    }
})

var App = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Flasher</h1>
                <NoteList notes={notes} />
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

// React.render(<App />, document.querySelector("#container"))
React.render(<MenuList />, document.querySelector("#menulist"))
