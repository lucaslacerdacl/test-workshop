import { MyTest } from "./my-test";

describe('My Test Class', () => {
  describe('isEqual', () => {
    const value = 5;
    const userService = new MyTest(value);

    it('Should return true for a equal value.', () => {
      const myValue = 5;
  
      const result = userService.isEqual(myValue);
  
      expect(result).toBeTruthy();
    });

    it('Should return false for a diff value.', () => {
      const myValue = 6;
  
      const result = userService.isEqual(myValue);
  
      expect(result).toBeFalsy();
    });
    
    it('Should throw exception when value is lower', () => {
      const myValue = 4;

      try {
        userService.isEqual(myValue);
      } catch (error) {
        expect(error.message).toBe('The value is too low.');
      }
    });
  });
});