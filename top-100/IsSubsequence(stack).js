
function isSubsequenceStack(s, t) {
    const stack = s.split('')
    for (const key of t) {
        if(key === stack[0]) {
            stack.shift()
        }
    }
    return stack.length === 0;
}

console.log(isSubsequenceStack("abc", "ahbgdc")); // true
console.log(isSubsequenceStack("axc", "ahbgdc")); // false
