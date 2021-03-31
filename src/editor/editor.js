import React from 'react';
import ReactDOM from 'react-dom';

class Editor extends React.Component {
    render() {
        return (
        <div>
            <div
                class="editBlock"
                id="mainEditor">
				    <h2>出力</h2>
                    <button class="io-github-shunshun94-trpg-logEditor-save">保存する</button>
				    <div class="logList"></div>
			</div>
			<div id="tmpEditor">
                <div class="editBlock" id="tmpEditorA">
                    <h2>一時置き場A</h2>
                    <button class="io-github-shunshun94-trpg-logEditor-save">保存する</button>
                    <div class="logList"></div>
                </div>
                <div class="editBlock" id="tmpEditorB">
                    <h2>一次置き場B</h2>
                    <button class="io-github-shunshun94-trpg-logEditor-save">保存する</button>
                    <div class="logList"></div>
                </div>
            </div>
            <div id="menu">
				<button class="menu-nameMenu">名前に関して設定</button>
				<button class="menu-styleReset">style を全削除</button>
				<button class="menu-idInsertion">全ての見出しにランダムな ID を挿入</button>
				<button class="menu-systemToPost">System の発言を個人の発言に変換</button>
				<button class="menu-editorVisual">ナイトモード ON/OFF</button>
				<button class="io-github-shunshun94-trpg-logEditor-preview">プレビュー</button>
			</div>
        </div>
        );
    }
}

export default Editor;
