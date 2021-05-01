import CommonHtmlExporter from './commonHtmlExporter.js';

const exporterFactory = {};

exporterFactory.getExporter = () => {
    return CommonHtmlExporter;
};

export default exporterFactory;