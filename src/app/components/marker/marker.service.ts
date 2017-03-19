/**
 * The Marker service client
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Marker } from './marker';

/**
 * Simple CRUD API operation
 */
@Injectable()
export class MarkerService {

  /**
   * Default constructor
   */
  constructor(private http: Http) {}

  /**
   * Get operation @GET
   */
  get(id: number) {
    return this.http.request('/rest/marker/get/' + id).map(res => res.json());
  }

  /**
   * Get all itens operation @GET
   */
  getAll() {
    return this.http.request('/rest/marker/getAll').map(res => res.json());
  }

  /**
   * Save operation @POST
   */
  save(marker) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/rest/marker/save', marker, headers);
  }

  /**
   * Delete operation @DELETE
   */
  delete(id: number) {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin:', '*');
    return this.http.delete('/rest/marker/delete/' + id);
  }
}
