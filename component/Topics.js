import React from 'react';
import ReactDOM from 'react-dom';
import {Link, withRouter, Route} from 'react-router-dom'
import Topics from 'bundle-loader?lazy&name=app-[name]!../component/TopicsSub/index'

import Bundle from '../component/Bundle/index'

const TopicsContainer = (props) => (
    <Bundle load={Topics}>
        {(Comm) => <Comm {...props}/>}
    </Bundle>
)


class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {match} = this.props;

        return (
            <div>
                <h2>主题列表</h2>
                <ul>
                    <li>
                        <Link to={`${match.url}/rendering`}>
                            使用 React 渲染
                        </Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/components`}>
                            组件
                        </Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/props-v-state`}>
                            属性 v. 状态
                        </Link>
                    </li>
                </ul>

                <Route path={`${match.path}/:topicId`} component={TopicsContainer}/>

                <Route exact path={match.path} render={() => (
                    <h3>请选择一个主题。</h3>
                )}/>
            </div>
        )
    }
}

export default withRouter(Index);