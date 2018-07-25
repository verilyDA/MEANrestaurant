import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rest-list',
  templateUrl: './rest-list.component.html',
  styleUrls: ['../app.component.css']
})
export class RestListComponent implements OnInit {
  rests: Restaurant[] = [];
  constructor(
    private service: RestaurantService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getRestaurants();
  }
  getRestaurants(): void {
    this.service.getRestaurants()
      .subscribe(rests => this.rests = rests);
  }
  readReview(id: string): void{
    this.router.navigateByUrl('/restaurants/' + id);
  }
  update(id: string): void{
    this.router.navigateByUrl('/restaurants/' + id + '/edit');
  }
  delete(id: string): void{
    for( let rest of this.rests){
      if (rest._id === id) {
        let i = (this.rests.indexOf(rest));
        this.rests.splice(i, 1);
      }
    }
    this.service.deleteRest(id)
      .subscribe(() => {
        this.router.navigateByUrl('');
      }));
  }
  newR(): void{
    this.router.navigateByUrl('/restaurants/new');
  }
}
