  //the Marker component

  import { Component } from '@angular/core';
  import { Marker } from './marker';

  @Component({
    selector: 'marker',
    templateUrl: 'marker.template.html',
    styleUrls: ['marker.css']
  })
  export class MarkerComponent {

    marker: Marker;
    description: string;
    markerObj: Marker;
    itens: Marker[];

    constructor() {
      this.marker = null;
      this.description = '';
      this.itens = [
        {
          id: 0,
          label: 'Luizalabs Franca',
          lat: -20.5401013,
          lng: -47.4073232,
          draggable: false
        },
        {
          id: 0,
          label: 'Luizalabs SP',
          lat: -20.5201013,
          lng: -47.4873232,
          draggable: false
        }
    ];
    }

    addMarker(event) {
      this.markerObj = {
        id: 0,
        lat: -20.5501013,
        lng: -47.4173232,
        draggable: false,
        completed: false
      }
      this.itens.push(this.markerObj);
      this.markerObj = this.getNewMarker();
      event.preventDefault();
    }

    deleteMarker(index) {
      this.itens.splice(index, 1);
    }

    clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`)
    }
    
    getNewMarker() {
      return {
          id: 0,
          label: null,
          lat: null,
          lng: null,
          draggable: false
        }
    }

}