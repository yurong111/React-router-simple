import React from 'react';
import ReactDOM from 'react-dom';


class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { match, location, history } = this.props
        return (
            <div><h1>About page</h1></div>
        )
    }
}

export default Index;