import _ from 'lodash';

const getSortedKeys = (obj1, obj2) => {
    const keys1 = _.keys(obj1);
    const keys2 = _.keys(obj2);

    const unitedKeys = _.union(keys1, keys2);
    const sortedKeys = _.sortBy(unitedKeys);

    return sortedKeys;
};

const comparedFiles = (data1, data2) => {
    const keys = getSortedKeys(data1, data2);
    const result = keys.map((key) => {
        const value1 = data1[key];
        const value2 = data2[key];

        if (_.has(data1, key) && !_.has(data2, key)) {
            return { key, value1, status: 'deleted'}
        }
        if (!_.has(data1, key) && _.has(data2, key)) {
            return { key, value2, status: 'added'}
        }
        if (_.isEqual(value1, value2)) {
            return { key, value1, status: 'unchanged'}
        }
        if (_.isObject(value1) && _.isObject(value2)) {
            return { key, children: compareFiles(value1, value2), status: 'nested' };
        }
        return { key, value1, value2, status: 'changed'}
    });
    return result;
};

export default comparedFiles;