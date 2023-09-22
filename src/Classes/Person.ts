import { IsPerson } from "./../Interfaces/IsPerson";

export class Person implements IsPerson {
  public constructor(
    private name: string,
    public age: number,
    public country: string
  ) {}

  getName() {
    return this.name;
  }

  public greeting(): string {
    return `Greeting ${this.getName()}`;
  }
}
