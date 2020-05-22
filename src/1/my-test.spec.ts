import { MyTest } from "./my-test";

describe('My Test Class', () => {
  it('Should return true for a equal value.', () => {
    const value = 5;
    const userService = new MyTest(value);
    const myValue = 5;

    const result = userService.isEqual(myValue);

    expect(result).toBeTruthy();
  });
});