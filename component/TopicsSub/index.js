import React from 'react';
import ReactDOM from 'react-dom';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {match} = this.props;
        return (
            <div>
                <h3>{match.params.topicId}</h3>
            </div>
        )
    }
}

export default Index;