import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactFormComponent } from './contact-form.component';
import { ContactTagsComponent } from './contact-tags/contact-tags.component';

@NgModule({
    declarations: [
        ContactFormComponent,
        ContactTagsComponent
    ],
    imports: [
        ReactiveFormsModule
    ],
    exports: [
        ContactFormComponent
    ]
})
export class ContactFormModule { }