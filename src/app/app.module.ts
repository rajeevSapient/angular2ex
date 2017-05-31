import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactHeaderComponent } from './contact-header/contact-header.component';
import { ContactTagsComponent } from './contact-tags/contact-tags.component';
import { ContactNavComponent } from './contact-nav/contact-nav.component';

import { ContactFormModule } from './contact-form/contact-form.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactHeaderComponent,
    ContactTagsComponent,
    ContactNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ContactFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
