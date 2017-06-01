import { Component, OnInit, AfterViewInit } from '@angular/core';


import { ContactService } from '../contact.service'; // TODO : pass data from parent component so that this compoent does not deal directly with service
import { Contact } from '../contact.model';

@Component({
  selector: 'app-cotact-list',
  templateUrl: './cotact-list.component.html',
  styleUrls: ['./cotact-list.component.css']
})
export class CotactListComponent implements OnInit, AfterViewInit {

  contacts: Contact[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.contacts = this.contactService.getContacts();
  }

}
