var rt = function (nums, target) {
    let arr = []
    for (const [i, k] of nums.entries()) {
        let t = nums.indexOf(target - k)
        if (t >= 0 && t !== i) {
            arr = [t, i]
            break;
        }
    }
    return arr
}

var twoSum = function (nums, target) {
    let memory = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (memory.has(target - nums[i])) {
            return [memory.get(target - nums[i]), i]
        } else {
            memory.set(nums[i], i)
        }
    }
    return []
}