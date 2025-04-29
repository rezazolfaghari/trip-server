// src/domain/shared/Location.ts

export class Location {
    private readonly city: string;
    private readonly country: string;
  
    constructor(city: string, country: string) {
      if (!city || !country) {
        throw new Error('City and country are required');
      }
      this.city = city;
      this.country = country;
    }
  
    public getCity(): string {
      return this.city;
    }
  
    public getCountry(): string {
      return this.country;
    }
  
    public toString(): string {
      return `${this.city}, ${this.country}`;
    }
  
    public equals(other: Location): boolean {
      return (
        this.city.toLowerCase() === other.getCity().toLowerCase() &&
        this.country.toLowerCase() === other.getCountry().toLowerCase()
      );
    }
  }
  