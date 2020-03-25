import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.styl'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  currentActivities = [];
  suggestedActivities = [];

  constructor() { }

  ngOnInit(): void {
  }

}
