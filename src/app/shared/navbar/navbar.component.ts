import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private location: Location) {}

  getTitle() {
    var title = this.location.prepareExternalUrl(this.location.path());

    const segments = title.split('/');
    return `${segments[1]} - ${segments[2]}`;
  }
}
