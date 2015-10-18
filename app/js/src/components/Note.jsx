import React, {Component} from "react";

export default class Note extends Component {
    render() {
        return (
            <div className="email-item email-item-selected pure-g">
                <div className="pure-u-3-4">
                    <h4 className="email-subject">{note.title}</h4>
                    <p className="email-desc">
                    {note.created_at}
                    </p>
                </div>
            </div>
        );
    }
}
