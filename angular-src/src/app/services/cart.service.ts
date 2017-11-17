import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CartService {

  // temporal token
  token = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6I'+
  'jVhMDlhYTg0ZjljZTE3MThhY2M4MzJkNiIsIm5hbWUiOiJJenVrdSBNaWRvcml5YSIsImV'+
  'tYWlsIjoiZGVrdUBleGFtcGxlLmNvbSIsInVzZXJuYW1lIjoiRGVrdSIsInBhc3N3b3JkI'+
  'joiJDJhJDEwJEFOa0FQRlZydHJ5NWc2OUdieE1mRmV6YVBBZXhHVmVramFjLlYzSlR6dW'+
  'd0UHFyYmkyRTBpIiwicGhvbmUiOiIwOTU0MjI4ODU1IiwicGhvbmVfMiI6IjA5NjU4OTYz'+
  'MjQiLCJhZGRyZXNzIjoiR1BaIiwiX192IjowfSwiaWF0IjoxNTEwNTg5NTU4LCJleHAiOjE'+
  '1MTExOTQzNTh9.On_LrH22qQ1uuU_oJ1jos-fZv9jJ0uyX7NYWbjf_i18';

  constructor(private http: Http) { }

  /**
   * Returns the logged in user's cart
   */
  showCart() {
    const headers = new Headers();
    headers.append('Authorization', this.token);

    return this.http.get('http://localhost:3000/api/cart/show-cart', {headers: headers})
      .map(res => res.json());
  }

  /**
   * Adds a product (item) into the cart
   * @param item is the product being added to the cart
   */
  addToCart(item) {
    const headers = new Headers();
    headers.append('Authorization', this.token);
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/api/cart/add-to-cart', item, {headers: headers})
      .map(res => res.json());
  }

  /**
   * Removes or reduces the quantity of an item in the cart
   * @param id is the id of the item being removed from the cart
   */
  removeItem(id) {
    const headers = new Headers();
    headers.append('Authorization', this.token);

    return this.http.delete('http://localhost:3000/api/cart/delete-item/' + id, {headers: headers})
      .map(res => res.json());
  }

  /**
   * Clears the cart of all entries
   */
  deleteAll() {
    const headers = new Headers();
    headers.append('Authorization', this.token);

    return this.http.delete('http://localhost:3000/api/cart/delete-all', {headers: headers})
      .map(res => res.json());
  }
}
