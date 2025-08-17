import CalculatorPage from "../Pages/calculator_page.js";
import { expect } from "chai";

describe('Android Calculator App Test', () => {

  beforeEach(async () => {
    // Clear layar sebelum setiap test case
    await CalculatorPage.clearScreen();
  });

  it('Perform pertambahan 2 angka (2 + 3 = 5)', async () => {
    await (await CalculatorPage.digit2).click();
    await (await CalculatorPage.plus).click();
    await (await CalculatorPage.digit3).click();
    await (await CalculatorPage.equals).click();

    const result = await CalculatorPage.getResultText();
    console.log("Plus Result:", result);

    expect(result).to.equal("5");
  });

  it('Perform pengurangan 2 angka (4 - 2 = 2)', async () => {
    await (await CalculatorPage.digit4).click();
    await (await CalculatorPage.minus).click();
    await (await CalculatorPage.digit2).click();
    await (await CalculatorPage.equals).click();

    const result = await CalculatorPage.getResultText();
    console.log("Minus Result:", result);

    expect(result).to.equal("2");
  });

  it('Perform perkalian 2 angka (2 x 3 = 6)', async () => {
    await (await CalculatorPage.digit2).click();
    await (await CalculatorPage.multiply).click();
    await (await CalculatorPage.digit3).click();
    await (await CalculatorPage.equals).click();

    const result = await CalculatorPage.getResultText();
    console.log("Multiplication Result:", result);

    expect(result).to.equal("6");
  });

  it('Perform pembagian 2 angka (9 : 3 = 3)', async () => {
    await (await CalculatorPage.digit9).click();
    await (await CalculatorPage.divide).click();
    await (await CalculatorPage.digit3).click();
    await (await CalculatorPage.equals).click();

    const result = await CalculatorPage.getResultText();
    console.log("Division Result:", result);

    expect(result).to.equal("3");
  });
});



// import { expect } from 'chai';
// import CalculatorPage from "../Pages/calculator_page.js"


// describe('Android calculator App Test', () => {


//   before(async () => {
//      await CalculatorPage.clearScreen(); //pastiin layar clear sebelum test
//     });


//   //delete session setiap kelar test

//   after(async () => {
//     if (driver) {
//       await driver.deleteSession();
//     }
//   });

//   it('Perform pertambahan 2 angka (2 + 3 = 5)', async () => {
//     await calculator.clearScreen();
    
//     await (await calculator.digit2).click();
//     await (await calculator.plus).click();
//     await (await calculator.digit3).click();
//     await (await calculator.equals).click();

//     const result = await calculator.getResultText();
//     console.log("Plus Result:", result);

//     // Assertion: 2 + 3 = 5
//     expect(result).to.equal("5");
//   });

  
//   it('Perform pengurangan 2 angka (4 - 2 = 2)', async () => {
//     await calculator.clearScreen();

//     await (await calculator.digit4).click();
//     await (await calculator.minus).click();
//     await (await calculator.digit2).click();
//     await (await calculator.equals).click();

//     const result = await calculator.getResultText();
//     console.log("Minus Result:", result);

//     // Assertion: 4 - 2 = 2
//     expect(result).to.equal("2");
//   });


//   it('Perform perkalian 2 angka (2 x 3 = 6)', async () => {
//     await calculator.clearScreen();

//     await (await calculator.digit2).click();
//     await (await calculator.multiply).click();
//     await (await calculator.digit3).click();
//     await (await calculator.equals).click();

//     const result = await calculator.getResultText();
//     console.log("Multiplication Result:", result);

//     // Assertion: 2 × 3 = 6
//     expect(result).to.equal("6");
//   });

  
//   it('Perform pembagian 2 angka (9 : 3 = 3)', async () => {
//     await calculator.clearScreen();

//     await (await calculator.digit9).click();
//     await (await calculator.divide).click();
//     await (await calculator.digit3).click();
//     await (await calculator.equals).click();

//     const result = await calculator.getResultText();
//     console.log("Division Result:", result);

//     // Assertion: 9 : 3 = 3
//     expect(result).to.equal("3");
//   });
// });