import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-rest-add',
  templateUrl: './rest-add.component.html',
  styleUrls: ['../app.component.css']
})
export class RestAddComponent implements OnInit {
  restaurant: Restaurant = new Restaurant();
  rests: Restaurant[] = [];
  errMsg = '';
  constructor(
    private service: RestaurantService,
    private router: Router,
    private loc: Location
    ) { }

  ngOnInit() {
    this.getNames();
  }
  cancel(): void {
    this.router.navigateByUrl('');
  }
  register(name: string, cuisine: string): void {
    if (name.length < 3) {
      this.errMsg = 'The name of the restaurant has to be 3 characters or longer';
    }
    if (cuisine.length < 3) {
      this.errMsg = 'The style f cuisine must be longer than 3 characters';
    }
    for (let rest of this.rests) {
      if (name === rest.name) {
        this.errMsg = 'The name of the restaurant is already in the system. Please choose a new restaurant';
      }
    }
    if ( name.length >= 3 && cuisine.length >= 3) {
    this.service.addRest({name, cuisine} as Restaurant)
      .subscribe( rest => {
        this.rests.push(rest);
        this.loc.back();
      });
    }
  }
  getNames(): void{
    this.service.getRestaurants()
      .subscribe(rests => this.rests = rests);
  }

}
