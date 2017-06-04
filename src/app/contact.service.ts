import { Contact } from './contact.model';
// import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// import { map } from 'rxjs/Operator/map';


export class ContactService {

    contacts: Contact[] = [
        {
            name: 'raj',
            email: '',
            jobtitle: '',
            location: '',
            social: {
                facebook: '',
                twitter: '',
                github: '',
                linkedin: ''
            },
            tags: ['family', 'friend']
        },
        {
            name: 'raj1',
            email: '',
            jobtitle: '',
            location: '',
            social: {
                facebook: '',
                twitter: '',
                github: '',
                linkedin: ''
            },
            tags: ['following', 'friend']
        },
        {
            name: 'raj3',
            email: '',
            jobtitle: '',
            location: '',
            social: {
                facebook: '',
                twitter: '',
                github: '',
                linkedin: ''
            },
            tags: ['family']
        }
    ];

    message$: Subject<string>;

    constructor() {
        this.message$ = new Subject();
    }

    addContact(contact: Contact) {
        this.contacts.push(contact);
        this.message$.next('contact added');
    }

    getContacts(): Contact[] {
        return this.contacts;
    }

}