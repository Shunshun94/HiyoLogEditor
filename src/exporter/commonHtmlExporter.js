const CommonHtmlExporter = {};

CommonHtmlExporter.generateAttributes = (post) => {
    return ['id', 'class', 'title', 'style'].filter((key)=>{
        return post[key];
    }).map((key)=>{
        return `${key}="${post[key]}"`;
    }).join(' ');
};

CommonHtmlExporter.convertSinglePost = (post) => {
    const attributes = CommonHtmlExporter.generateAttributes(post);
    if(post.tag === 'hr') {
        return `<hr ${attributes}/>`;
    }

    if(post.name) {
        return `<${post.tag} ${attributes}>
            <span></span>
            <span>${post.name}</span>
            <span>${post.content}</span>
        </${post.tag}>`;
    } else {
        return `<${post.tag} ${attributes}>${post.content}</${post.tag}>`;
    }
};

CommonHtmlExporter.convert = (doms, tmp_head, omit, mode) => {
    const head = tmp_head ? tmp_head : CommonHtmlExporter.getDefaultHeader(mode);
    return head + doms.map(CommonHtmlExporter.convertSinglePost).join('\n') + omit.join('\n') + '\n</body>\n</html>';
};

CommonHtmlExporter.download = (html) => {
    const url = window.URL.createObjectURL(new Blob([ html ], { "type" : 'text/html;charset=utf-8;' }));
	const dlLink = document.createElement("a");
	document.body.appendChild(dlLink);
	dlLink.download = `saved_${Number(new Date())}.html`;
	dlLink.href = url;
	dlLink.click();
	dlLink.remove();
	URL.revokeObjectURL(url);
};

CommonHtmlExporter.exec = (doms, tmp_head, omit, mode) => {
    const html = CommonHtmlExporter.convert(doms, tmp_head, omit, mode);
    CommonHtmlExporter.download(html);
};


CommonHtmlExporter.getDefaultHeader = (mode) => {
	return `<!DOCTYPE html>
	<html>
	<head>
	  <meta charset="utf-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
	  <link rel="stylesheet" href="https://shunshun94.github.io/shared/jquery/io/github/shunshun94/trpg/replay/replay4-ccfolia${ mode ? '-' + mode : ''}.css"　type="text/css" />
	</head>
	<body>\n`;
};

export default CommonHtmlExporter;