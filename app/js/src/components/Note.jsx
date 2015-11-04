import React, {Component} from "react";

export default class Note extends Component {
    render() {
        let note = this.props.note;
        return (
            <div
                onClick={ this.props.selectNote }
                className={
                  this.props.noteId == note.id ? "email-item pure-g email-item-selected" : "email-item pure-g"
                }>
                <div className="pure-u-3-4">
                    <h4 className="email-subject">{ note.title }</h4>
                    <p className="email-desc">{ note.created_at }</p>
                </div>
            </div>
        );
    }
}
