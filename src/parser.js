import YAML from 'yaml';

const parsing = {
    json: JSON.parse,
    yaml: YAML.parse,
    yml: YAML.parse,
};

export default (filePath, extension) => {
    try {
        return parsing[extension](filePath);
    } catch (error) {
        throw new Error(`Unknown Format ${extension}!`);
    };
};