import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  counter: number = 0;

  constructor() { }

  getCount() {
    return this.counter;
  }



}