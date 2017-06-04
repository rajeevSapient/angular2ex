import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-contact-tags',
  templateUrl: './contact-tags.component.html',
  styleUrls: ['./contact-tags.component.css']
})
export class ContactTagsComponent implements OnInit {

  @Output() tagAdd = new EventEmitter();

  buttonActive = false;

  constructor(private contactService: ContactService) { }

  ngOnInit() {

    this.contactService.message$.subscribe(
      () => {
        this.buttonActive = false;
      }
    );

  }

  addTag($event, tag) {

    $event.target.disabled = true;
    this.tagAdd.emit(tag);

  }
  enableButton() {
    this.buttonActive = false;
  }

}
