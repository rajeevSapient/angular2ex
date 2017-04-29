import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BooddashboardComponent } from './booddashboard/booddashboard.component';
import { BookleafComponent } from './bookleaf/bookleaf.component';
import { BookformComponent } from './bookform/bookform.component';

@NgModule({
  declarations: [
    AppComponent,
    BooddashboardComponent,
    BookleafComponent,
    BookformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
