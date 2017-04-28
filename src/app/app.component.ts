import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Hello world";
  disabled = false;
  btnlabel = "not disabled";

  ngOnInit() {
    setTimeout(() => {
      this.title = "new hello world";
      this.btnlabel = "disabled now";
      this.disabled = true;
    }, 2000);
  }
}
