import React from 'react';
import ReactDOM from 'react-dom';
import './css/logEditor.css';
import './css/darkmode.css';
import './css/wideScreenMode.css';
import FileLoaderComponent from './fileload/fileLoaderComponent.js';

const e = React.createElement;

class LogEditor extends React.Component {
    constructor(props) {
        super(props);
        this.onFileLoaded = this.onFileLoaded.bind(this);
    }

    onFileLoaded(parsedFile) {
        console.log(parsedFile);
    } 
    render() {
        return (
            <FileLoaderComponent
                onFileLoaded={this.onFileLoaded}
            >
            </FileLoaderComponent>
        );
    }
}

const domContainer = document.querySelector('#base');
ReactDOM.render(e(LogEditor), domContainer);
