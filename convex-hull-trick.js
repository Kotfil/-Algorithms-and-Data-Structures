// Что такое Convex Hull Trick?
//     Используется, чтобы ускорить динамику с линейной составляющей, когда DP имеет вид:
// dp[i] = min(dp[j] + b[j] * a[i])    (j < i)

// Если:
//     a[i] возрастающая
// b[j] тоже возрастающая или убывающая
// → можно добавлять прямые y = b[j] * x + dp[j] и искать минимум по x = a[i].
//
// 📦 Пример задачи:
//     У тебя есть массивы a[] и b[], нужно вычислить:

// dp[i] = min(dp[j] + b[j] * a[i])  (для всех j < i)

// a[i], b[i] — даны, dp[0] = 0
//
// Размер n до 1e5

// Реализация CHT (JS):


class ConvexHull {
    constructor() {
        this.lines = [];
    }

    // Добавить новую прямую: y = m * x + b
    add(m, b) {
        while (this.lines.length >= 2 && this.bad(this.lines[this.lines.length - 2], this.lines[this.lines.length - 1], [m, b])) {
            this.lines.pop();
        }
        this.lines.push([m, b]);
    }

    // Проверка — лишняя ли средняя прямая
    bad(line1, line2, line3) {
        const [m1, b1] = line1, [m2, b2] = line2, [m3, b3] = line3;
        return (b3 - b1) * (m1 - m2) < (b2 - b1) * (m1 - m3);
    }

    // Получить минимум в точке x (перебором, можно бинпоиском)
    query(x) {
        let l = 0, r = this.lines.length - 1;
        while (l < r) {
            const m  = Math.floor((l + r) / 2);
            const val1 = this.eval(this.lines[m], x);
            const val2 = this.eval(this.lines[m + 1], x);
            if (val1 <= val2) r = m;
            else l = m + 1;
        }
        return this.eval(this.lines[l], x);
    }

    eval([m, b], x) {
        return m * x + b;
    }
}

function convexHullDP(a, b) {
    const n = a.length;
    const dp = Array(n).fill(0);
    const cht = new ConvexHull();
    dp[0] = 0;
    cht.add(b[0], dp[0]);

    for (let i = 1; i < n; i++) {
        dp[i] = cht.query(a[i]);
        cht.add(b[i], dp[i]);
    }

    return dp;
}

