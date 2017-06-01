import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactform: FormGroup;

  @Output() newContact = new EventEmitter<Contact>();

  constructor(private fb: FormBuilder) { }

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
      })
    });

  }

  onSubmit() {
    this.newContact.emit(this.contactform.value);
    console.log(this.contactform.value);
  }

}
