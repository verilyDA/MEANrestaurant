import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RestListComponent } from './rest-list/rest-list.component';
import { RestAddComponent } from './rest-add/rest-add.component';
import { RestEditComponent } from './rest-edit/rest-edit.component';
import { RestReviewComponent } from './rest-review/rest-review.component';
import { ReviewAddComponent } from './review-add/review-add.component';

import { RestaurantService } from './restaurant.service';
import { AppRoutingModule } from './app-routing.modules';

@NgModule({
  declarations: [
    AppComponent,
    RestListComponent,
    RestAddComponent,
    RestEditComponent,
    RestReviewComponent,
    ReviewAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    RestaurantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
