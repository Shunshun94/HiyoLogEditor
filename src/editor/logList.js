import React from 'react';

import Post from './post.js'

class LogList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doms: props.doms
        };
        console.log(this.state.doms);
    }

    render() {
        return(
            <div
                className="logList">
            {this.state.doms.length}
            </div>
        );
    }
};

export default LogList;
