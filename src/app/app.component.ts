import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  hobbies: string[] = [];

  constructor() { }

  ngOnInit() { }

  onSave(hobby) {
    this.hobbies.push(hobby);
  }

  onRemove(index) {
    this.hobbies.splice(index, 1);
  }
}
