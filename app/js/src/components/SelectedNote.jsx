import React, {Component} from "react";

export default class SelectedNote extends Component {
    render() {
        let note = this.props.note;
        return (
            <div id="main" className="pure-u-1">
                <div id="selectednote" className="email-content">
                    <div className="email-content-header pure-g">
                        <div className="pure-u-2-3 pure-form pure-group">
                            <textarea className="email-content-title" onChange={this.props.onTitleChange} value={ note.title } />
                            <p className="email-content-subtitle">
                            at <span>{ note.created_at }</span>
                            </p>
                        </div>

                        <div className="email-content-controls pure-u-1-3">
                            <button className="secondary-button pure-button">Star</button>
                            <button className="secondary-button pure-button">Del</button>
                        </div>
                    </div>

                    <div className="email-content-body pure-form pure-group">
                        <textarea className="email-content-desc" onChange={this.props.onDescChange} value={ note.desc } />
                    </div>
                </div>
            </div>
        );
    }
}
