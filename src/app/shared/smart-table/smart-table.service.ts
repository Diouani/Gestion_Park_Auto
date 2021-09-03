import { Injectable } from '@angular/core';
import { SmartTableData } from './smart-table';

@Injectable({
  providedIn: 'root',
})
export class SmartTableService extends SmartTableData {
  data = [
    {
      id: 5736537,
      firstName: 'Toyota',
      lastName: 'Yaris',
      username: 'Voiture de service',
      email: '25/08/2019',
      age: 'Affectée',
    },
    {
      id: 786567,
      firstName: 'Mercedes',
      lastName: 'Maybach',
      username: "Voiture d'invités",
      email: '25/08/2020',
      age: 'Non Affectée',
    },
  ];

  getData() {
    return this.data;
  }
}
