// The Marker component

import { Component } from '@angular/core';
import { Marker } from './marker';
import { MarkerService } from './marker.service';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-marker',
  templateUrl: 'marker.template.html',
  styleUrls: ['marker.css'],
  providers: [MarkerService]
})
export class MarkerComponent {

  // Presentation
  marker: Marker;
  itens: Marker[];
  // Form
  label: string;
  latitude: number;
  longitude: number;

  /**
   * Default constructor
   */
  constructor(private markerService: MarkerService) {
    this.refreshItensList();
  }

  /**
   * Adiciona um marker
   */
  addMarker(event) {
    const markerDTO = {
      id: null,
      label: this.label,
      lat: this.latitude,
      lng: this.longitude,
    };
    console.log('addMarker', markerDTO);
    this.markerService.save(markerDTO).subscribe (
      data => console.log('save', data),
      err => console.log('error', err),
      () => this.refreshItensList()
    );
    this.refreshItensList();
  }

  /**
   * Delete the marker
   */
  deleteMarker(id) {
    this.markerService.delete(id).subscribe (
      data => console.log('delete', data),
      err => console.log('error', err),
      () => this.refreshItensList()
    );
  }

  /**
   * Refresh the list of Markers
   */
  refreshItensList() {
    this.markerService.getAll().subscribe(
      data => this.itens = data,
      err => console.log('error', err)
    );
  }

  /**
   * Show the marker information
   */
  clickedMarker(marker: Marker) {
    console.log(`clicked the marker: `, marker);
  }

}
