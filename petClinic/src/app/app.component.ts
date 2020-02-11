import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'petClinic';

   public navBar = {
    isNavbarCollapsed: true,
    owners: {
      dropdown: true
    },
    vets: {
      dropdown: true
    }
  }
}
