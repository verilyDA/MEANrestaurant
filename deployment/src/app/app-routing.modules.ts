import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RestListComponent } from './rest-list/rest-list.component';
import { RestAddComponent } from './rest-add/rest-add.component';
import { RestEditComponent } from './rest-edit/rest-edit.component';
import { RestReviewComponent } from './rest-review/rest-review.component';
import { ReviewAddComponent } from './review-add/review-add.component';
const routes: Routes = [
    { path: '', pathMatch: 'full', component: RestListComponent },
    { path: 'restaurants',  component: RestListComponent },
    { path: 'restaurants/new',  component: RestAddComponent },
    { path: 'restaurants/:id/edit',  component: RestEditComponent },
    { path: 'restaurants/:id',  component: RestReviewComponent },
    { path: 'restaurants/:id/reviews',  component: ReviewAddComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
