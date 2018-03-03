import './index.css';

import React, { Component } from 'react';

export default class Sidebar extends Component {
    render() {
        return (
            <div class="wrapper">
                <nav id="sidebar">
                    <div class="sidebar-header">
                        <h3>Collapsible Sidebar</h3>
                    </div>

                    <ul class="list-unstyled components">
                        <li class="active">
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
                            <ul class="collapse list-unstyled" id="homeSubmenu">
                                <li><a href="#">Page</a></li>
                                <li><a href="#">Page</a></li>
                                <li><a href="#">Page</a></li>
                            </ul>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Contact</a></li>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}