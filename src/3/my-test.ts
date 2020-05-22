import { DataBaseConnection, SavedNumber } from "./db";

export class MyTest {
  private value: number;
  private dbConnection: DataBaseConnection;

  isEqual(myNumber: number): boolean {
    if (myNumber < this.value) {
      throw new Error('The value is too low.');
    }

    return myNumber === this.value;
  }

  save(): SavedNumber {
    try {
      const result = this.dbConnection.save(this.value);
      return result;
    } catch (error) {
      throw new Error("The value could not be inserted!");
    }

  }

  constructor(value: number, dbConnection: DataBaseConnection) {
    this.value = value;
    this.dbConnection = dbConnection;
  }
}