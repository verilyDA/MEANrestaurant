import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rest-edit',
  templateUrl: './rest-edit.component.html',
  styleUrls: ['../app.component.css']
})
export class RestEditComponent implements OnInit {
  rest: Restaurant = new Restaurant();
  errMsg = '';

  constructor(
    private service: RestaurantService,
    private router: Router,
    private AR: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getRestaurant();
  }
  getRestaurant():void{
    const id = this.AR.snapshot.params['id'];
    this.service.getRestById(id)
      .subscribe(rest => this.rest = rest);
  }
  getRestaurants(): void {
    this.service.getRestaurants()
      .subscribe(rests => this.rests = rests);
  }
  edit(name: string, cuisine: string):void{
    if (name.length < 3) {
      this.errMsg = ("Name has to have more than 3 characters");
    }
    if (cuisine.length < 3) {
      this.errMsg = ('Cuisine has to have more than 3 characters');
    }
    if(name.length >= 3 && cuisine.length >= 3) {
      const id = this.AR.snapshot.params['id'];
      this.service.editRest({name, cuisine} as Restaurant, id)
        .subscribe(() => this.router.navigateByUrl(''));
    }
  }
  cancel(): void {
    this.router.navigateByUrl('');
  }
}
