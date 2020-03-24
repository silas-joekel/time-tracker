import { Component } from '@angular/core';

interface Plugin {
  identifier: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
})
export class AppComponent {
  plugins: Plugin[] = [
    {
      identifier: 'rocket-league',
      name: 'Rocket League',
    },
    {
      identifier: 'sleep',
      name: 'Sleep',
    },
  ];
}
