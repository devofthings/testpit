const subtraction = require('./sub');
test('subtracts 4 - 2 to equal 2', () => {
   expect(subtraction(4, 2)).toBe(2);
});

test('subtracts 0 - 2 to equal -2', () => {
   expect(subtraction(0, 2)).toBe(-2);
});

test('subtracts 0 - 0 to equal 0', () => {
   expect(subtraction(0, 0)).toBe(0);
});