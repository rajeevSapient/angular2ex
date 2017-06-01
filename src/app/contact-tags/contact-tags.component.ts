import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact-tags',
  templateUrl: './contact-tags.component.html',
  styleUrls: ['./contact-tags.component.css']
})
export class ContactTagsComponent implements OnInit {

  @Output() tagAdd = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addTag($event, tag) {
    $event.target.disabled = true;
    this.tagAdd.emit(tag);
  }

}
