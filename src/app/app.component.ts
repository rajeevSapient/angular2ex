import { Component, OnInit } from '@angular/core';


import { ContactService } from './contact.service';
import { Contact } from './contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    ContactService
  ]
})
export class AppComponent implements OnInit {

  constructor(private contactservice: ContactService) { }

  onNewContact(data: Contact) {
    this.contactservice.addContact(data);
  }

  ngOnInit() {
    this.contactservice.message$.subscribe(
      msg => console.log(msg),
      err => console.log(err),
      () => console.log('done')
    );
  }

}
