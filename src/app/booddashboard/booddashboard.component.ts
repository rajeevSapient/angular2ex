import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-booddashboard',
  templateUrl: './booddashboard.component.html',
  styleUrls: ['./booddashboard.component.css']
})
export class BooddashboardComponent implements OnInit {
  @Input() books = [];
  constructor() { }
  ngOnInit() {
  }

}
