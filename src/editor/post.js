import React from 'react';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: props.dom.tag,
            name: props.dom.name,
            content: props.dom.content.replaceAll('<div>', '<div >').replaceAll('</div>', '</div><!-- keep -->'),
            title: props.dom.title,
            sytle: props.dom.style,
            id: props.dom.id,
            class: props.dom.class 
        };
    }
    render() {
        return(
            <div
                className="io-github-shunshun94-trpg-logEditor-Post"
            >
                <div className="io-github-shunshun94-trpg-logEditor-Post-handle">≡</div>
                <div className="io-github-shunshun94-trpg-logEditor-Post-params">
                    <span className="io-github-shunshun94-trpg-logEditor-Post-params-param">tag
                        <input
                            type="text"
                            value={this.state.tag}
                            list="io-github-shunshun94-trpg-logEditor-candidates-tags"
                            className="io-github-shunshun94-trpg-logEditor-Post-params-param-input io-github-shunshun94-trpg-logEditor-Post-params-param-input-tag" />
                    </span>
                    <span className="io-github-shunshun94-trpg-logEditor-Post-params-param">id
                        <input
                            type="text"
                            value={this.state.id}
                            className="io-github-shunshun94-trpg-logEditor-Post-params-param-input io-github-shunshun94-trpg-logEditor-Post-params-param-input-id" />
                        <button className="io-github-shunshun94-trpg-logEditor-Post-params-param-button io-github-shunshun94-trpg-logEditor-Post-params-param-button-random_id">ランダムのID</button>
                    </span>
                    <span className="io-github-shunshun94-trpg-logEditor-Post-params-param">class
                        <input
                            type="text"
                            value={this.state.class}
                            list="io-github-shunshun94-trpg-logEditor-candidates-classes"
                            className="io-github-shunshun94-trpg-logEditor-Post-params-param-input io-github-shunshun94-trpg-logEditor-Post-params-param-input-class" />
                        <button className="io-github-shunshun94-trpg-logEditor-Post-params-param-button io-github-shunshun94-trpg-logEditor-Post-params-param-button-toggle_sub">余談 ON/OFF</button>
                    </span>
                    <span class="io-github-shunshun94-trpg-logEditor-Post-params-param">style
                        <input
                            type="text"
                            value={this.state.style}
                            className="io-github-shunshun94-trpg-logEditor-Post-params-param-input io-github-shunshun94-trpg-logEditor-Post-params-param-input-style" />
                    </span>
                </div>
                <p>発言者：<span
                    className="io-github-shunshun94-trpg-logEditor-Post-name"
                    contenteditable="true">{this.state.name}</span></p>
                <div 
                    className="io-github-shunshun94-trpg-logEditor-Post-content"
                    contenteditable="true">{this.state.content}</div>
                <button
                    title="発言を複製する"
                    className="io-github-shunshun94-trpg-logEditor-Post-duplicate">C</button>
                <button
                    title="直上の発言に発言内容をマージする"
                    className="io-github-shunshun94-trpg-logEditor-Post-merge">M</button>
                <button
                    title="発言を削除する"
                    className="io-github-shunshun94-trpg-logEditor-Post-delete">×</button>
            </div>
        );
    }
};

export default Post;
