import ConvertorFactory from '../convertors/convertorFactory.js';

const FileLoader = {};

FileLoader.onDrop = (e) => {
	const targetFile = e.dataTransfer.files[0];
	return FileLoader.readFile(targetFile);
};

FileLoader.onInput = (e)=>{
	const targetFile = e.target.files[0];
	return FileLoader.readFile(targetFile);
};

FileLoader.readFile = (targetFile) => {
	return ConvertorFactory.getConvertor(targetFile).dropEventToJson(targetFile);
};

export default FileLoader;