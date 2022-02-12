// You should implement your task here.

module.exports = function towelSort(matrix) {
    let x = 0;
    let arr = [];
    if (matrix == undefined) {
        return arr;
    }
    matrix.forEach(function (item, i) {
        if (i % 2 != 0) {
            for (let j = 0; j < item.length / 2; j++) {
                x = item[item.length - 1 - j];
                item[item.length - 1 - j] = item[j];
                item[j] = x;
            }
        }
        for (let j = 0; j < item.length; j++) {
            arr.push(item[j]);
        }
    });
    return arr;
};
