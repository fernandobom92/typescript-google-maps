import faker from 'faker';
import { Mappable } from './CustomMap'; //importa uma interface de outro arquivo

//implements garante que a classe User tenha todas as propriedades de Mappable
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  //constructor sempre é executado ao chamar uma classe
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `<h2>User name: ${this.name}</h2>`;
  }


}