import Encoding from 'encoding-japanese';

const CcfoliaConvertor = {};
CcfoliaConvertor.IGNORE_TAGS = ['script'];
CcfoliaConvertor.DEFAULT_TABS_CLASS = {
	'[雑談]': 'tab1'
};

CcfoliaConvertor.elementToJson = (elem) => {
	const tagName = elem.localName;
	if(CcfoliaConvertor.IGNORE_TAGS.includes(tagName)) {
		return false;
	}
	const result = {tag: tagName};
	const children = elem.children;
	if(tagName === 'p' && children.length === 3) {
		result.name = children[1].innerHTML.trim();
		result.content = children[2].innerText.trim();
		result.tabName = children[0].innerHTML.trim();
	} else { 
		result.content = elem.innerText.trim();
	}
	result.title = elem.getAttribute('title') || '';
	result.style = elem.getAttribute('style') || '';
	result.id = elem.getAttribute('id') || '';
	result.class = elem.getAttribute('class') || CcfoliaConvertor.DEFAULT_TABS_CLASS[result.tabName] || '';

	return result;
};

CcfoliaConvertor.dropEventToJson = (file) => {
	return new Promise((resolve, reject)=>{
		file.arrayBuffer().then((result)=>{
			const codes = new Uint8Array(result);
			const rawHtml = Encoding.convert(codes, {
				to: 'unicode',
				from: Encoding.detect(codes),
				type: 'string'
			});
			resolve(CcfoliaConvertor.htmlToJson(rawHtml));
		});
	});
};

CcfoliaConvertor.isDefaultHead = (headRawHtml) => {
	return headRawHtml.includes(`<title>ccfolia - `);
};

CcfoliaConvertor.htmlToJson = (rawDom) => {
	const dom = (new DOMParser()).parseFromString(rawDom, 'text/html');
	const bodyChildren = dom.body.children;
	const bodyChildrenLength = bodyChildren.length;
	const list = [];
	const omit = [];
	for(var i = 0; i < bodyChildrenLength; i++) {
		const json = CcfoliaConvertor.elementToJson(bodyChildren[i]);
		if(json) { list.push(json) } else { omit.push(bodyChildren[i].outerHTML); }
	}
	const header = CcfoliaConvertor.isDefaultHead(dom.head.outerHTML) ? '' : dom.head.outerHTML;
	
	return {
		doms: [list, [], []],
		omitted: omit,
		head: header
	};
};

export default CcfoliaConvertor;