import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { Comment } from '../comment';
import { RestaurantService } from '../restaurant.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rest-review',
  templateUrl: './rest-review.component.html',
  styleUrls: ['../app.component.css']
})
export class RestReviewComponent implements OnInit {
  comments: Comment[] = [];
  rest: Restaurant = new Restaurant();
  
  constructor(
    private service: RestaurantService,
    private router: Router,
    private AR: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getReviews();
  }
  newReview():void{
    const id = this.AR.snapshot.params['id'];
    this.router.navigateByUrl('/restaurants/' + id + '/reviews');
  }
  getReviews(): void {
    const id = this.AR.snapshot.params['id'];
    this.service.getComms(id)
      .subscribe(comms => this.comments = comms);
    this.service.getRestById(id)
      .subscribe(rest => this.rest = rest);
  }
  goBack():void{
    this.router.navigateByUrl('');
  }
}
