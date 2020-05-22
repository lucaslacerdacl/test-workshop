export class MyTest {
  private value: number;

  isEqual(myNumber: number): boolean {
    if (myNumber < this.value) {
      throw new Error('The value is too low.');
    }

    return myNumber === this.value;
  }

  constructor(value: number) {
    this.value = value;
  }
}