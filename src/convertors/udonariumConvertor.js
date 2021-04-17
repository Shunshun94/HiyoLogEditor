import JSZip from 'jszip';

const UdonariumConvertor = {};
UdonariumConvertor.MAIN = 'メインタブ';
UdonariumConvertor.dropEventToJson = (file) => {
	var jszip = new JSZip();
	return new Promise((resolve, reject)=>{
		jszip.loadAsync(file).then((zip)=>{
			zip.file('chat.xml').async("string").then((rawContent)=>{
				const dom = (new DOMParser()).parseFromString(rawContent, 'text/xml');
				const tabs = dom.getElementsByTagName('chat-tab');
				const list = [];
				for(var i = 0; i < tabs.length; i++) {
					const targetTab = tabs[i];
					const tabClass = (targetTab.getAttribute('name') === UdonariumConvertor.MAIN) ? '' : 'tab1'; 
					const posts = targetTab.getElementsByTagName('chat');
					for(var j = 0; j < posts.length; j++) {
						const targetPost = posts[j];
						const rawName = targetPost.getAttribute('name');
						const tmpName = /<BCDice：(.+)>/.exec(rawName);
						list.push({
							title: '',
							style: '',
							id: '',
							class: tabClass,
							tag: 'p',
							name: tmpName ? tmpName[1] : rawName,
							content: targetPost.innerHTML,
							ts: Number(targetPost.getAttribute('timestamp'))
						});
					}
				}
				resolve({
					doms: [list.sort((a,b)=>{return a.ts - b.ts}), [], []],
					omitted: [],
					head: ''
				});
			});
		});
	});
};

export default UdonariumConvertor;