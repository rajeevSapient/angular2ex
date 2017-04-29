import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bookleaf',
  templateUrl: './bookleaf.component.html',
  styleUrls: ['./bookleaf.component.css']
})
export class BookleafComponent implements OnInit {

  @Input() books = [];

  constructor() { }

  onRemove(index) {
    this.books.splice(index, 1);
  }

  ngOnInit() {
  }

}
