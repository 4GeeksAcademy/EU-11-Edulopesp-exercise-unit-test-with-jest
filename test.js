
test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2; 
     expect(fromEuroToDollar(3.5)).toBe(4.2); 
});
test("One dollar should be 106,58 Yen's", function(){
    const { fromDollarToYen } = require('./app.js')
    const yens = fromDollarToYen(1);
    const expected = 1 / 1.2 * 127.9; 
     expect(fromDollarToYen(1)).toBe(106.58);
});
test("One Yen should be 0,006 Pounds", function(){
    const { fromYenToPound } = require('./app.js')
    const yens = fromYenToPound(1);
    const expected = 1 / 127.9 * 0.8; 
     expect(fromYenToPound(1)).toBe(0.006);
});