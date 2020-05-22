export class MyTest {
  private value: number;

  isEqual(myNumber: number): boolean {
    return myNumber === this.value;
  }

  constructor(value: number) {
    this.value = value;
  }
}