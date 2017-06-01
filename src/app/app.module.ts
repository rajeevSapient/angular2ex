import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactHeaderComponent } from './contact-header/contact-header.component';
import { ContactTagsComponent } from './contact-tags/contact-tags.component';
import { ContactNavComponent } from './contact-nav/contact-nav.component';
import { ContactFormModule } from './contact-form/contact-form.module';
import { appRoutes } from './app.route';
import { CotactItemComponent } from './cotact-item/cotact-item.component';
import { CotactListComponent } from './cotact-list/cotact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactHeaderComponent,
    ContactTagsComponent,
    ContactNavComponent,
    CotactItemComponent,
    CotactListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ContactFormModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
