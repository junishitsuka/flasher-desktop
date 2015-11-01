import React, {Component} from "react";

export default class SelectedNote extends Component {
    render() {
        return (
            <div id="main" className="pure-u-1">
                <div id="selectednote" className="email-content">
                    <div className="email-content-header pure-g">
                        <div className="pure-u-1-2">
                            <h1 className="email-content-title">{this.props.note.title}</h1>
                            <p className="email-content-subtitle">
                            at <span>{this.props.note.created_at}</span>
                            </p>
                        </div>

                        <div className="email-content-controls pure-u-1-2">
                            <button className="secondary-button pure-button">Star</button>
                            <button className="secondary-button pure-button">Delete</button>
                        </div>
                    </div>

                    <div className="email-content-body">
                        <p>
                            {this.props.note.desc}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
