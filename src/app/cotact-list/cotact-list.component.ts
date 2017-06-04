import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


import { ContactService } from '../contact.service'; // TODO : pass data from parent component so that this compoent does not deal directly with service
import { Contact } from '../contact.model';

@Component({
  selector: 'app-cotact-list',
  templateUrl: './cotact-list.component.html',
  styleUrls: ['./cotact-list.component.css']
})
export class CotactListComponent implements OnInit {

  contacts: Contact[] = [];
  id: string;

  constructor(private contactService: ContactService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param: Params) => {
        console.log(param['id']);
        this.id = param['id'];
        this.contacts = this.contactService.getContacts();
      }
    );
  }

}
