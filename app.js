
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
};
const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / 1.2;
    let valueInYen =  valueInEuro * 127.9;
    return parseFloat(valueInYen.toPrecision(5));
};
const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / 127.9;
    let valueInPound =  valueInEuro * 0.8;
    return parseFloat(valueInPound.toPrecision(1));
};
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound};

