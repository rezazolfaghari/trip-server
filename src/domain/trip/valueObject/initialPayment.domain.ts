// src/domain/trip/valueObjects/initialPayment.domain.ts

export class InitialPayment {
    private readonly amount: number;
  
    constructor(amount: number) {
      if (amount < 0) {
        throw new Error('Initial payment cannot be negative.');
      }
  
      this.amount = amount;
    }
  
    get value(): number {
      return this.amount;
    }
  
    isEqual(other: InitialPayment): boolean {
      return this.amount === other.amount;
    }
  }