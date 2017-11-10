
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link } from 'react-router-dom'

import Topics from 'bundle-loader?lazy&name=app-[name]!../component/Topics'
import TopicsSub1 from 'bundle-loader?lazy&name=app-[name]!../component/TopicsSub/Sub1'
import About from 'bundle-loader?lazy&name=app-[name]!../component/About'
import Home from 'bundle-loader?lazy&name=app-[name]!../component/Home'

/*import Home from '../component/Home'
import About from '../component/About'
import Topics from '../component/Topics'*/

import Bundle from '../component/Bundle/index'

const AboutContainer = (props) => (
    <Bundle load={About}>
        {(Comm) => <Comm {...props}/>}
    </Bundle>
)

const TopicsContainer = (props) => (
    <Bundle load={Topics}>
        {(Comm) => <Comm {...props}/>}
    </Bundle>
)

const HomeContainer = (props) => (
    <Bundle load={Home}>
        {(Comm) => <Comm {...props}/>}
    </Bundle>
)


class InitLayout extends React.Component {

    render() {
        return (
            <div>
                <h1>Welcome!</h1>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/topics">
                            Topics
                        </Link>
                    </li>
                </ul>
                <Route exact path="/" component={HomeContainer}/>
                <Route path="/about" component={AboutContainer}/>
                {/*<Route path="/topics/sub1" component={TopicsSub1Container}/>*/}
                <Route path="/topics"  component={TopicsContainer}/>
                {/*<Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/topics" component={Topics}/>*/}
            </div>
        )
    }
}

const App = () =>
    <BrowserRouter>
        <InitLayout />
    </BrowserRouter>;

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

