import { Contact } from './contact.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { map } from 'rxjs/Operator/map';


export class ContactService {

    contacts: Contact[] = [];
    message$: Subject<string>;

    constructor() {
        this.message$ = new Subject();
    }

    addContact(contact: Contact) {
        this.contacts.push(contact);
        this.message$.next('contact added');
    }

    getContacts() {
        return this.contacts;
    }

}