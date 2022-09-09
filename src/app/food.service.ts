import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Food } from './models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getFoods(): Observable<Food[]> {
    return this.http.get<Food[]>('https://imbus-food-blacklist.herokuapp.com/product');
  }

  addFood(food: Food): Observable<Food>{
    return this.http.post<Food>('https://imbus-food-blacklist.herokuapp.com/product', food);
  } 
}
