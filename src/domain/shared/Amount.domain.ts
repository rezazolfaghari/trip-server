// src/domain/shared/Amount.ts

export class Amount {
    private readonly value: number;
  
    constructor(value: number) {
      if (!Number.isFinite(value) || value < 0) {
        throw new Error('Amount must be a non-negative number');
      }
      this.value = value;
    }
  
    public getValue(): number {
      return this.value;
    }
  
    public add(amount: Amount): Amount {
      return new Amount(this.value + amount.getValue());
    }
  
    public subtract(amount: Amount): Amount {
      const result = this.value - amount.getValue();
      if (result < 0) {
        throw new Error('Insufficient amount');
      }
      return new Amount(result);
    }
  
    public equals(other: Amount): boolean {
      return this.value === other.getValue();
    }
  }
  