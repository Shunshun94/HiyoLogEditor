import UdonariumConvertor from './udonariumConvertor.js';
import CcfoliaConvertor from './ccfoliaConvertor.js';

const ConvertorFactory = {};
ConvertorFactory.getConvertor = (file) => {
	if(file.name.endsWith('.zip')) {
		return UdonariumConvertor;
	} else {
		return CcfoliaConvertor;
	}
};

// https://gist.github.com/hanayashiki/8dac237671343e7f0b15de617b0051bd
(function () {
	File.prototype.arrayBuffer = File.prototype.arrayBuffer || myArrayBuffer;
	Blob.prototype.arrayBuffer = Blob.prototype.arrayBuffer || myArrayBuffer;
  
	function myArrayBuffer() {
	  // this: File or Blob
	  return new Promise((resolve) => {
		let fr = new FileReader();
		fr.onload = () => {
		  resolve(fr.result);
		};
		fr.readAsArrayBuffer(this);
	  })
	}
})();

export default ConvertorFactory;