import { ReactSortable } from "react-sortablejs";
import { Sortable, MultiDrag} from "sortablejs"
import React from 'react';
import Post from './post.js';
import exporterFactory from './../exporter/exporterFactory.js';

Sortable.mount(new MultiDrag());

class LogList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doms: props.doms.slice(),
            head: props.head,
            omitted: props.omitted
        };
        this.sortDoms = this.sortDoms.bind(this);
        this.download = this.download.bind(this);
        this.exporter = exporterFactory.getExporter();
    }

    download() {
        exporterFactory.getExporter().exec(this.state.doms, this.state.head, this.state.omitted, false);
    }

    sortDoms(doms) {
        this.setState({
            doms: doms,
            head: this.state.head,
            omitted: this.state.omitted
        });
    }

    render() {
        const posts = this.state.doms.map((post, cursor)=>{
            return Post.getHtml(post, `_${cursor}`);
        });

        return(
            <div
                className="editBlock"
                id={this.props.editorId}>
                    <h2>{this.props.title}</h2>
                    <button 
                        onClick={this.download}
                        className="io-github-shunshun94-trpg-logEditor-save">保存する</button>
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
            </div>
        );
    }
};

export default LogList;
