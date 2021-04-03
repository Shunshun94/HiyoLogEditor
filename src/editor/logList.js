import React from 'react';

import Post from './post.js'

class LogList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doms: props.doms
        };
    }

    render() {
        const posts = this.state.doms.map((post, cursor)=>{
            return (
                <Post
                    key={cursor}
                    dom={post}
                ></Post>
            );
        });

        return(
            <div
                className="logList">
            {posts}
            </div>
        );
    }
};

export default LogList;
