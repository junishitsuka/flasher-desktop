import React, {findDOMNode, Component, ProtoTypes} from "react";

export default class SideBar extends Component {
    render() {
        return (
            <div id="nav" className="pure-u">
                <a href="#" className="nav-menu-button">Menu</a>

                <div className="nav-inner">
                    <div><span className="app-name"># Flasher</span></div>
                    <button className="primary-button pure-button">+ New Note</button>
                    <div className="pure-menu" id="menulist"></div>
                    <div>
                        <ul className="pure-menu-list">
                            <li className="pure-menu-item">
                                <a href="#" className="pure-menu-link">
                                    Note <span className="email-count">(2)</span>
                                </a>
                            </li>
                            <li className="pure-menu-item">
                                <a href="#" className="pure-menu-link">
                                    Star <span className="email-count">(2)</span>
                                </a>
                            </li>
                            <li className="pure-menu-item">
                                <a href="#" className="pure-menu-link">
                                    Trash <span className="email-count">(2)</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
