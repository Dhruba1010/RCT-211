
const sum = require('./sum_arguments.js');

describe('Testing sum function', () => {
    test('add 2 positive numbers', () => {
        expect(sum(1,2)).toBe(3)
    })
    test('add 2 negetive numbers', () => {
        expect(sum(-1,-2)).toBe(-3)
    })
    test('add 2 floating numbers', () => {
        expect(sum(1.3,2.4)).toBe(3.7)
    })
    test('add 2 numbers as string, where output is integer', () => {
        expect(sum('1','2')).toBe(3)
    })
    test("Call sum with no arguments", () => {
        expect(sum()).toBe("sum invoked without arguments");
    });
    test("Call sum with one argument", () => {
        expect(sum(1)).toBe("sum functions needs atleast 2 arguments");
    });
    test("add 3 numbers", () => {
        expect(sum(1, 2, 3)).toBe(6);
    });

    test("add 4 numbers", () => {
        expect(sum(1, 2, 3, 4)).toBe(10);
    });
    test('add 5 numbers', () => {
        expect(sum(1,2,3,4,5)).toBe(15);
    })
})