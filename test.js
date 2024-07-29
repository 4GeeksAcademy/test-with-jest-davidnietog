test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("Conversion from USD to JPY (1 USD = 149.03 JPY)", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(10)).toBe(1490.3);
})

test("Conversion from JPY to GBP (1 JPY = 0.0072 GBP)", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(1000)).toBe(7.2);
})


test("One dollar should be 149.03 yenes", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromDollarToYen(10);

    // Si 1 dolar son 149.03 yenes, entonces 1 dolar debe ser (10 * 149.03)
    const expected = 10 * 149.03;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(10)).toBe(1490.3); 
})



test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
})


test("One yen should be 0.72 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromYenToPound(1000);

    // Si 1 yen son 0.72 pounds, entonces 1 yen debe ser (1000 * 0.72)
    const expected = 1000 * 0.72;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(1000)).toBe(7.2);
})