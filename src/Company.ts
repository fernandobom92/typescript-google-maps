import faker from 'faker';
import { Mappable } from './CustomMap'; //importa uma interface de outro arquivo

//implements garante que a classe Company tenha todas as propriedades de Mappable
export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  
  //constructor sempre é executado ao chamar uma classe
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()), 
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `
      <h2>Company name: ${this.companyName}</h2>
      <h3>Catchphrase: ${this.catchPhrase}</h3>
    `;
  }
}