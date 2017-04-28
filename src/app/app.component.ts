import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hobby: string;

  onChange(evt) {
    this.hobby = evt.target.value;
  }

}
