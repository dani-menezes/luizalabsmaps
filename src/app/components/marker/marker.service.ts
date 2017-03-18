/**
 * The Marker service client
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Marker } from './marker';

@Injectable()
export class MarkerService {

  constructor(private http: Http) {}

  get(id: number) {
    return this.http.request('/rest/marker/get/' + id).map(res => res.json());
  }

  getAll() {
    return this.http.request('/rest/marker/getAll').map(res => res.json());
  }

  save(marker) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/rest/marker/save', marker, headers);
  }

  delete(id: number) {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin:', '*');
    return this.http.delete('/rest/marker/delete/' + id);
  }
}
