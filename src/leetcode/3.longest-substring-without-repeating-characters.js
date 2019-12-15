var rt = function (s) {
    let arr = s.split('')
    if (arr.length === 0) {
        return 0
    }
    let rt = []
    let max = 0
    for (const item of arr) {
        if (rt.indexOf(item) >= 0) {                      
            rt = rt.slice(rt.lastIndexOf(item) + 1, rt.length)
        }
        rt.push(item)
        if (max < rt.length) {
            max = rt.length
        }
    }
    return max
}

function lengthOfLongestSubstring(s) {
    const map = {};
    var left = 0;

    return s.split('').reduce((max, v, i) => {
        left = map[v] >= left ? map[v] + 1 : left;
        map[v] = i;
        return Math.max(max, i - left + 1);
    }, 0);
}