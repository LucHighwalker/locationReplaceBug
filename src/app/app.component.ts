import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'locationReplaceBug';

  constructor(private location: Location) {
    // If the page's initial url has a hash parameter, the below should remove url with hash from browser history.
    // Instead it is as if it simply pushes the new state to the history stack.
    this.location.replaceState('');
  }
}
