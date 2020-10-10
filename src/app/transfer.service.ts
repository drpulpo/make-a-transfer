import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Transfer } from './models';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  constructor(private http: HttpClient) {}
  getTransfers() {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.get('assets/data/transactions.json', { headers });
  }
}
