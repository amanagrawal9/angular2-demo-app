import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { id: 1,  name: 'Smart Phone', code: 'AB04587', description: 'SmartPhone', price: 200 },
      { id: 1,  name: 'Printer', code: 'AB04789', description: 'Printer', price: 100 },
    ];
    return {products};
  }
}
