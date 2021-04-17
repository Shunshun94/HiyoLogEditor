import { ReactSortable } from "react-sortablejs";
import React from 'react';
import Post from './post.js'

class LogList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doms: props.doms.slice()
        };
        this.sortDoms = this.sortDoms.bind(this);
    }

    sortDoms(doms) {
        this.setState({
            doms: doms
        });
    }

    render() {
        const posts = this.state.doms.map((post, cursor)=>{
            return Post.getHtml(post, `_${cursor}`);
            /*
            return (
                <Post
                    key={'_' + cursor}
                    dom={post}
                ></Post>
            );*/
        });

        return(
            <div
                className="logList">
            <ReactSortable
                group="logLists"
                animation={200}
                delayOnTouchStart={true}
                delay={2}
                list={this.state.doms}
                setList={this.sortDoms}
            >
            {posts}
            </ReactSortable>
            </div>
        );
    }
};

export default LogList;
