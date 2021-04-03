import React from 'react';
import LogList from './logList.js';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doms: [
                props.log.doms,
                [],
                []
            ]
        };
    }

    render() {
        return (
        <div>
            <div
                className="editBlock"
                id="mainEditor">
				    <h2>出力</h2>
                    <button 
                        className="io-github-shunshun94-trpg-logEditor-save">保存する</button>
				    <LogList
                        doms={this.state.doms[0]}
                    ></LogList>
			</div>
			<div id="tmpEditor">
                <div
                    className="editBlock"
                    id="tmpEditorA">
                    <h2>一時置き場A</h2>
                    <button className="io-github-shunshun94-trpg-logEditor-save">保存する</button>
                    <LogList
                        doms={this.state.doms[1]}
                    ></LogList>
                </div>
                <div
                    className="editBlock"
                    id="tmpEditorB">
                    <h2>一次置き場B</h2>
                    <button className="io-github-shunshun94-trpg-logEditor-save">保存する</button>
                    <LogList
                        doms={this.state.doms[2]}
                    ></LogList>
                </div>
            </div>
            <div id="menu">
				<button className="menu-nameMenu">名前に関して設定</button>
				<button className="menu-styleReset">style を全削除</button>
				<button className="menu-idInsertion">全ての見出しにランダムな ID を挿入</button>
				<button className="menu-systemToPost">System の発言を個人の発言に変換</button>
				<button className="menu-editorVisual">ナイトモード ON/OFF</button>
				<button className="io-github-shunshun94-trpg-logEditor-preview">プレビュー</button>
			</div>
        </div>
        );
    }
}

export default Editor;
