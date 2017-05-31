import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactform: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.contactform = this.formBuilder.group({

      name: ['', Validators.required],
      email: ['', Validators.email],
      jobtitle: '',
      location: '',
      social: this.formBuilder.group({
        facebook: '',
        github: '',
        twitter: '',
        linkedin: ''
      })

    });

  }

  onNewContact() {
    console.log(this.contactform);
  }

}
