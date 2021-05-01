import React from 'react';
import LogList from './logList.js';
import exporterFactory from './exporter/exporterFactory.js';

class Editor extends React.Component {
    constructor(props) {
        super(props);
    }

    onUpdateDoms(listId, posts) {
        const doms = this.props.log.doms.slice();
        doms[listId] = posts;
        this.props.onUpdatePosts(doms);
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
                        doms={this.props.log.doms[0]}
                        onUpdateDoms={(doms)=>{this.onUpdateDoms(0, doms)}}
                    ></LogList>
			</div>
			<div id="tmpEditor">
                <div
                    className="editBlock"
                    id="tmpEditorA">
                    <h2>一時置き場A</h2>
                    <button className="io-github-shunshun94-trpg-logEditor-save">保存する</button>
                    <LogList
                        doms={this.props.log.doms[1]}
                        onUpdateDoms={(doms)=>{this.onUpdateDoms(1, doms)}}
                    ></LogList>
                </div>
                <div
                    className="editBlock"
                    id="tmpEditorB">
                    <h2>一次置き場B</h2>
                    <button className="io-github-shunshun94-trpg-logEditor-save">保存する</button>
                    <LogList
                        doms={this.props.log.doms[2]}
                        onUpdateDoms={(doms)=>{this.onUpdateDoms(2, doms)}}
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
