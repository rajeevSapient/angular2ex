import { Routes } from '@angular/router';

import { CotactListComponent } from './cotact-list/cotact-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

export const appRoutes: Routes = [
    { path: 'contacts', component: CotactListComponent },
    { path: 'contacts/:id', component: CotactListComponent },
    { path: '*', component: CotactListComponent },
    { path: 'newcontact', component: ContactFormComponent }
];