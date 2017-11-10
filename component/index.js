import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'

import Home from './Home'
import About from './About'
import Topics from './Topics'

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                </ul>
            </div>
        )
    }
}

export default Index