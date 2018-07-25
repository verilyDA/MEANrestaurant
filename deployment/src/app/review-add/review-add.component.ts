import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Comment } from '../comment';
import { RestaurantService } from '../restaurant.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-review-add',
  templateUrl: './review-add.component.html',
  styleUrls: ['../app.component.css']
})
export class ReviewAddComponent implements OnInit {
  comment: Comment = new Comment();
  comms: Comment[] = [];
  errMsg = '';
  constructor(
    private service: RestaurantService,
    private router: Router,
    private loc: Location,
    private AR: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  cancel():void{
    const id = this.AR.snapshot.params['id'];
    this.router.navigateByUrl('/restaurants/' + id);
  }
  submit(name: string, stars: number, desc: string): void{
    if(name.length < 3){
      this.errMsg = ('Your name is too short. Must be at least 3 characters long');
    }
    if(stars < 1 || stars > 5) {
      this.errMsg  = ('How did you do that? Stars can only be from 1 to 5...');
    }
    if(desc.length < 3){
      this.errMsg = ('Please type in more characters for your description. 3 is the minimum.');
    }
    if(name.length >= 3 && stars > 0 && stars < 6 && desc.length >= 3) {
      const id = this.AR.snapshot.params['id'];
      this.comment = {
        name: name,
        stars: stars,
        desc: desc,
        for_rest: id
      }
    }
    this.service.addComm(this.comment)
      .subscribe(comm => {
        this.comms.push(comm);
        this.loc.back();
      });
    }
  }

}
