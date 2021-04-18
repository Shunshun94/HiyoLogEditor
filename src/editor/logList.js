import { ReactSortable } from "react-sortablejs";
import { Sortable, MultiDrag} from "sortablejs"
import React from 'react';
import Post from './post.js'

Sortable.mount(new MultiDrag());

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
        });

        return(
            <div
                className="logList">
            <ReactSortable
                group="logLists"
                handle=".io-github-shunshun94-trpg-logEditor-Post-handle"
                selectedClass="io-github-shunshun94-trpg-logEditor-Post-selected"
                multiDrag="true"
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
