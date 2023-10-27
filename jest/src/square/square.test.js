const square = require("./square");

describe("square", () => {

    //One time before all tests
    beforeAll(() => {

    })

    //Before every test
    beforeEach(() => {

    })

    test("Correct value", () => {
        // expect(square(2)).toBe(4);
        // expect(square(2)).toBeLessThan(5);
        // expect(square(2)).toBeGreaterThan(3);
        // expect(square(2)).not.toBeUndefined();
      });

  test("Correct value2", () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(2);
    expect(spyMathPow).toBeCalledTimes(1)
  });

  test("Correct value2", () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(1);
    expect(spyMathPow).toBeCalledTimes(0)
  });

  //after every test 
  afterEach(() => {
    jest.clearAllMocks();
  })

  //one time after all tests
  afterAll(() => {

  })
});
