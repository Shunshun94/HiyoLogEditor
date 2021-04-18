import React from 'react';
import ReactDOM from 'react-dom';
import './css/logEditor.css';
import './css/darkmode.css';
import './css/wideScreenMode.css';
import FileLoaderComponent from './fileload/fileLoaderComponent.js';
import Editor from './editor/editor.js';

const e = React.createElement;

class LogEditor extends React.Component {
    constructor(props) {
        super(props);
        this.onFileLoaded = this.onFileLoaded.bind(this);
        this.onUpdatePosts = this.onUpdatePosts.bind(this);
        this.state = {
            elems: {
                doms: [[], [], []],
                head: '',
                omitted: []
            }
        };
    }

    onFileLoaded(parsedFile) {
        this.setState({
            elems: parsedFile
        });
    }
    onUpdatePosts(doms) {
        this.setState({
            elems: {
                doms: doms,
                head: this.state.elems.head,
                omitted: this.state.elems.omitted
            }
        });
    }
    render() {
        if(this.state.elems.doms[0].length || this.state.elems.doms[1].length || this.state.elems.doms[2].length) {
            return(
                <Editor
                    log={this.state.elems}
                    onUpdatePosts={this.onUpdatePosts}
                ></Editor>
            );
        } else {
            return (
                <FileLoaderComponent
                    onFileLoaded={this.onFileLoaded}
                >
                </FileLoaderComponent>
            );
        }
    }
}

const domContainer = document.querySelector('#base');
ReactDOM.render(e(LogEditor), domContainer);
