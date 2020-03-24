import { Component } from '@angular/core';

interface Plugin {
  identifier: string;
  name: string;
}

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.styl'],
  templateUrl: './app.component.html',
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
