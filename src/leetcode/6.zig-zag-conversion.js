/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var two = function (s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;
    let item = []
    let str = s.split('')

    let len = s.length
    let t = Math.floor(len / (2 * numRows - 2))
    let nums = 0
    if (t === 0) {
        nums = len - numRows + 1
    } else {
        let k = len % (2 * numRows - 2)
        nums = t * (numRows - 1) + (k > numRows ? (k - numRows + 1) : 1)
    }

    for (let i = 0; i < nums; i++) {
        let idx = i % (numRows - 1)
        let arr = new Array(numRows)
        if (idx === 0) {
            arr = str.slice(0, numRows)
            str = str.slice(numRows, str.length)
        } else {
            arr[numRows - idx - 1] = str[0]
            str = str.slice(1, str.length)
        }
        item.push(arr)
    }
    return output(item, numRows)
}

var output = (item, number) => {
    let rt = []
    for (let idx = 0; idx < number; idx++) {
        for (const tmp of item) {
            if (tmp[idx] !== undefined) {
                rt.push(tmp[idx])
            }

        }
    }
    return rt.join("")
}

var rt = function (s, numRows) {
    if (numRows === 1 || s.length < numRows) return s
    let line = new Array(numRows)
    let len = s.length

    let ci = Math.floor(len / (numRows * 2 - 2))
    let yu = len % (numRows * 2 - 2)

    line[0] = ci
    line[numRows - 1] = ci
    for (let j = 1; j < (numRows - 1); j++) {
        line[j] = 2 * ci
    }

    for (let k = 0; k < yu; k++) {
        if (k < numRows) {
            line[k] += 1
        } else {
            line[2 * numRows - k - 2] += 1
        }

    }

    return s.split('').reduce((pre, cur, inde) => {
        pre[result((inde + 1), numRows, line)] = cur
        return pre
    }, []).join('')
}

var result = (inde, numRows, line) => {
    let n1 = inde % (2 * numRows - 2)
    let lin = Math.floor(inde / (2 * numRows - 2))

    if (n1 === 0) return line[0] + 2 * lin - 1
    if (n1 > numRows) {
        n1 = 2 * numRows - n1
        let rt = line.slice(0, n1 - 1).reduce((pre, cur) => {
            return pre + cur
        }, 0)
        if (n1 === 1 || n1 === numRows) {
            return rt + lin
        } else {
            return rt + 2 * lin + 1
        }
    } else {
        let rt = line.slice(0, n1 - 1).reduce((pre, cur) => {
            return pre + cur
        }, 0)
        if (n1 === 1 || n1 === numRows) {
            return rt + lin
        } else {
            return rt + 2 * lin
        }
    }

}

var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    let rows = []
    let reverse = false;
    let count = 0

    for (let i = 0; i < numRows; i++) rows[i] = [];
    for (let i = 0; i < s.length; i++) {
        rows[count].push(s[i]);
        reverse ? count-- : count++;
        if (count === numRows - 1 || count === 0) reverse = !reverse;
    }
    console.log(rows);
    
    return rows.reduce((converted, cur) => converted + cur.join(''), '');
}
// @lc code=end
