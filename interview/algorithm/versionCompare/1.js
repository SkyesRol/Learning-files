// Number 是显式类型转换的函数
function compareVersion(v1, v2) {
    const v1Arr = v1.split('.').map(item => Number(item));
    const v2Arr = v2.split('.').map(item => Number(item));
    //console.log(v1Arr, v2Arr);
    const maxLength = Math.max(v1Arr.length, v2Arr.length);
    for (let i = 0; i < maxLength; i++) {
        const ver1 = v1Arr[i] || 0;
        const ver2 = v2Arr[i] || 0;
        if (ver1 > ver2) {
            return 1;
        } else if (ver1 < ver2) {
            return -1;
        }
    }
    return 0;
}
const res = compareVersion('0.1.2', '0.1.11');
console.log(res);
