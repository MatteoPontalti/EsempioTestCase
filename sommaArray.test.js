var sommaArray = require('./sommaArray');

//Valid results
test('sommaArray([2,3,4,5]) => 14', function() {
    expect(sommaArray([2,3,4,5])).toBe(14);
});

//case with baudary values
test('sommaArray([0,3,4,5]) => 12', function() {
    expect(sommaArray([0,3,4,5])).toBe(12);
});

test('sommaArray([2,0,4,5]) => 11', function() {
    expect(sommaArray([2,0,4,5])).toBe(11);
});

test('sommaArray([2,3,0,5]) => 10', function() {
    expect(sommaArray([2,3,0,5])).toBe(10);
});

test('sommaArray([2,3,4,0]) => 9', function() {
    expect(sommaArray([2,3,4,0])).toBe(9);
});

//case with negative numbers
test('sommaArray([-1,3,4,5]) => -1', function() {
    expect(sommaArray([-1,3,4,5])).toBe(-1);
});

test('sommaArray([2,-1,4,5]) => -1', function() {
    expect(sommaArray([2,-1,4,5])).toBe(-1);
});

test('sommaArray([2,3,-1,5]) => -1', function() {
    expect(sommaArray([2,3,-1,5])).toBe(-1);
});

test('sommaArray([2,3,4,-1]) => -1', function() {
    expect(sommaArray([2,3,4,-1])).toBe(-1);
});

//Invalid 
test('sommaArray([]) => -1', function() {
    expect(sommaArray([])).toBe(-1);
});

test('sommaArray([2, 3, 4], "String") => -1', function() {
    expect(sommaArray([2, 3, 4], "String")).toBe(-1);
});

test('sommaArray([2,3,4]) => -1', function() {
    expect(sommaArray([2,3,4])).toBe(-1);
});

test('sommaArray([2, 3]) => -1', function() {
    expect(sommaArray([2, 3])).toBe(-1);
});

test('sommaArray([2]) => -1', function() {
    expect(sommaArray([2])).toBe(-1);
});

test('sommaArray(["2", 3,4,5]) => -1', function() {
    expect(sommaArray(["2",3,4,5])).toBe(-1);
});

test('sommaArray([2,3.5,4,5]) => -1', function() {
    expect(sommaArray([2,3.5,4,5])).toBe(-1);
});

test('sommaArray([2,3,4,]) => -1', function() {
    expect(sommaArray([2,3,4,])).toBe(-1);
});

//it takes only the first 4 number, so if i add another number, it will be ignored
test('sommaArray([2,3,4,5,6]) => 14', function() {
    expect(sommaArray([2,3,4,5,6])).toBe(14);
});
