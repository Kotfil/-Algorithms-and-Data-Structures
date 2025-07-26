export const addBinary = (a, b) => {
    const sum = BigInt('0b' + a) + BigInt('0b' + b);
    return sum.toString(2);
};
addBinary("11", "1"); // 👉 "100"
addBinary("1010", "1011"); // 👉 "10101"
