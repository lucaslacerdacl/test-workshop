import { MyTest } from "./my-test";
import { DataBaseConnection } from "./db";

describe('My Test Class', () => {
  const dbConnection = new DataBaseConnection();

  describe('isEqual', () => {
    const value = 5;
    const userService = new MyTest(value, dbConnection);

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

  describe('Save', () => {
    const value = 5;
    const userService = new MyTest(value, dbConnection);

    it('Should save the value and return the id and value', () => {
      const saveResult = {
        id: "7811d450-ec21-45d9-a8a6-205b78e8db4d",
        number: value
      };

      const saveMock = jest.spyOn(dbConnection, 'save')
        .mockImplementation()
        .mockReturnValue(saveResult);

      const result = userService.save();

      expect(result).toEqual(saveResult)
      expect(saveMock).toHaveBeenCalledWith(value);
    });
  });
});