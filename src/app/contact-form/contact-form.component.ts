import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactform: FormGroup;

  // @Output() newContact = new EventEmitter<Contact>();

  constructor(private fb: FormBuilder, private contactService: ContactService) { }

  tags = [];

  ngOnInit() {

    this.contactform = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      jobtitle: '',
      location: '',
      social: this.fb.group({
        facebook: '',
        github: '',
        twitter: '',
        linkedin: ''
      }),
      tags: [[]]
    });

  }

  onSubmit() {
    this.contactform.patchValue({
      tags: this.tags
    });
    this.contactService.addContact(this.contactform.value);
    // this.newContact.emit(this.contactform.value);
    this.tags = [];
    console.log(this.contactform.value);
    this.contactform.reset();
  }

  onTagClicked(tag) {
    this.tags.push(tag);
  }

}
