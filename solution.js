class Calculator {
    constructor() {
        this.PI = Math.PI;
        this.E = Math.E;
    }

    ratio(x, y, width) {
        return (width * y) / x;
    }

    percentage(x, y) {
        if (y === 0) {
            return 'Fehler: Divisor darf nicht Null sein';
        }
        const result = (x / y) * 100;
        return result.toFixed(2) + '%';
    }

    add(x, y) {
        return x + y;
    }

    subtract(x, y) {
        return y - x;
    }

    multiply(x, y) {
        return x * y;
    }

    divide(x, y) {
        if (y === 0) {
            return 'Fehler: Divisor darf nicht Null sein';
        }
        return x / y;
    }

    remainder(x, y) {
        if (y === 0) {
            return 'Fehler: Divisor darf nicht Null sein';
        }
        return x % y;
    }

    elevate(x, y) {
        return Math.pow(x, y);
    }

    sqrt(x) {
        if (x < 0) {
            return 'Fehler: Quadratwurzel einer negativen Zahl kann nicht berechnet werden';
        }
        return Math.sqrt(x);
    }
}