import React from 'react';
import LogList from './logList.js';
//import exporterFactory from '../exporter/exporterFactory.js';

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
                <LogList
                    editorId="mainEditor"
                    title="出力"
                    doms={this.props.log.doms[0]}
                    onUpdateDoms={(doms)=>{this.onUpdateDoms(0, doms)}}
                ></LogList>
			<div id="tmpEditor">
                <LogList
                    editorId="tmpEditorA"
                    title="一時置き場A"
                    doms={this.props.log.doms[1]}
                    onUpdateDoms={(doms)=>{this.onUpdateDoms(1, doms)}}
                ></LogList>
                <LogList
                    editorId="tmpEditorB"
                    title="一時置き場B"
                    doms={this.props.log.doms[2]}
                    onUpdateDoms={(doms)=>{this.onUpdateDoms(2, doms)}}
                ></LogList>
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
