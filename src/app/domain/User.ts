export class User {

  constructor(private readonly id: number,
              private readonly email: string) {
  }

  getId(): number {
    return this.id;
  }

  getEmail(): string {
    return this.email;
  }

}
