export interface SavedNumber {
  id: string;
  number: Number;
}

export class DataBaseConnection {
  save(number: Number): SavedNumber {
    throw new Error("Not implemented");
  }
}