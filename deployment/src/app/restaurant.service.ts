import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from './restaurant';
import { Comment } from './comment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private restUrl = '/api/rest/';
  private commUrl = '/api/comm/';

  constructor(
    private HTTP: HttpClient
  ) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.HTTP.get<Restaurant[]>(this.restUrl);
  }
  addRest(rest: Restaurant): Observable<Restaurant> {
    return this.HTTP.post<Restaurant>(this.restUrl, rest);
  }
  getRestById(id: string): Observable<Restaurant> {
    return this.HTTP.get<Restaurant>(this.restUrl + id);
  }
  editRest(rest: Restaurant, id: string): Observable<Restaurant> {
    return this.HTTP.put<Restaurant>(this.restUrl + id, rest);
  }
  deleteRest(id: string): Observable<Restaurant> {
    return this.HTTP.delete<Restaurant>(this.restUrl + id);
  }
  getComms(id: string): Observable<Comment[]> {
    return this.HTTP.get<Comment[]>(this.commUrl + id);
  }
  addComm(comm: Comment): Observable<Comment> {
    return this.HTTP.post<Comment>(this.commUrl, comm);
  }
}
