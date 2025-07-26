// 1. Задача о сдаче (Coin Change - Minimum Coins)
// У тебя есть монеты номиналом [1, 5, 10, 25], нужно выдать сдачу
// на сумму 63 минимальным количеством монет.
function getGreedyCoins(coins, amount) {
    coins.sort((a, b) => b - a); // от большего к меньшему
    const result = [];

    for (let coin of coins) {
        while (amount >= coin) {
            amount -= coin;
            result.push(coin);
        }
    }

    return result;
}
// Пример:
console.log(getGreedyCoins([1, 5, 10, 25], 63));
// [25, 25, 10, 1, 1, 1]

const getGreedyCoinsMain = (coins, amount) => {
    coins.sort((a, b) => b - a);
    const result = [];
    for (let coin of coins) {
        while (amount >= coin) {
            amount -= coin;
            result.push(coin);
        }
    }
    return result
}
console.log(getGreedyCoinsMain([1, 5, 10, 25], 63));

// 2. Максимум встреч (Activity Selection)
// Дано: массив встреч с началом и концом.
// Нужно выбрать максимум непересекающихся.
function maxMeetings(meetings) {
    // Сортируем по времени окончания
    meetings.sort((a, b) => a.end - b.end);
    const result = [];
    let endTime = 0;

    for (let meeting of meetings) {
        if (meeting.start >= endTime) {
            result.push(meeting);
            endTime = meeting.end;
        }
    }

    return result;
}
// Пример:
const meetings = [
    { start: 1, end: 3 },
    { start: 2, end: 4 },
    { start: 3, end: 5 },
    { start: 0, end: 6 },
    { start: 5, end: 7 },
];
// Выдаст максимум непересекающихся встреч
console.log(maxMeetings(meetings));

