import React from 'react';
import FileLoader from './fileLoad.js';

class FileLoaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: 'white'
        };
    }

    onDrop(e) {
        e.preventDefault();
        this.setState({
            bgColor: 'white'
        });
        const self = this;
        FileLoader.onDrop(e).then(self.props.onFileLoaded);
    }

    onDragLeave(e) {
        this.setState({
            bgColor: 'white'
        });
    }
 
    onDragOver(e) {
        e.stopPropagation();
        e.preventDefault();
        this.setState({
            bgColor: 'blue'
        });
    }

    render() {
        const classes = `io-github-shunshun94-trpg-logEditor-FileLoader io-github-shunshun94-trpg-logEditor-FileLoader-${this.state.bgColor}`;
        return (
            <div
                className={classes}
                onDrop={(e)=>this.onDrop(e)}
                onDragLeave={(e)=>{this.onDragLeave(e)}}
                onDragOver={(e)=>{this.onDragOver(e)}}
            >
                ログの HTML ないしユドナリウムの部屋の zip  を Drag/Drop するか、以下からアップロードしてください<br/>
                <input
                    type="file"
                    name="io-github-shunshun94-trpg-logEditor-FileLoader-InputFile"
                    id="io-github-shunshun94-trpg-logEditor-FileLoader-InputFile" 
                    onInput={(e)=>FileLoader.onInput(e)}
                    />
            </div>
        );
    }
}

export default FileLoaderComponent;
