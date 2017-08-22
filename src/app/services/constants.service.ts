import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {
  API_ENDPOINT: string;

  constructor() {
    // this.API_ENDPOINT = 'http://localhost:3000/';
    this.API_ENDPOINT = 'http://10.0.0.108:3000/';
  }

}
