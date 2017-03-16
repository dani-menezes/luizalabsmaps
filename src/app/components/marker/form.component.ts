// The marker form component

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-marker-form',
  templateUrl: 'form.template.html'
})
export class MarkerFormComponent {
  public markerForm = this.fb.group({
    label: ['', Validators.required],
    latitude: ['', Validators.required],
    longitude: ['', Validators.required]
  });
  constructor(public fb: FormBuilder) {}

  addMarker(event) {
    console.log(this.markerForm.value);
    alert(this.markerForm.value);
  }
}
