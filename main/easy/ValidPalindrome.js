export const isPalindrome = (s) => {
    const chars = s.toLowerCase().split('');
    return chars.join('') === chars.reverse().join('');
};


console.log(isPalindrome('abba'))