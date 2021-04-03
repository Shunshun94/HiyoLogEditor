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
        this.state = {
            elems: {
                doms: [],
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
    render() {
        if(this.state.elems.doms.length) {
            return(
                <Editor
                    log={this.state.elems}
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
