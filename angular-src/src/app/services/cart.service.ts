import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CartService {

  // temporal token
  authToken: any;

  constructor(private http: Http) { }

  /**
   * Returns the logged in user's cart
   */
  showCart() {
    this.loadToken();
    const headers = new Headers();
    headers.append('Authorization', this.authToken);

    return this.http.get('http://localhost:3000/api/cart/show-cart', {headers: headers})
      .map(res => res.json());
  }

  /**
   * Adds a product (item) into the cart
   * @param item is the product being added to the cart
   */
  addToCart(item) {
    this.loadToken();
    const headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/api/cart/add-to-cart', item, {headers: headers})
      .map(res => res.json());
  }

  /**
   * Removes or reduces the quantity of an item in the cart
   * @param id is the id of the item being removed from the cart
   */
  removeItem(id) {
    this.loadToken();
    const headers = new Headers();
    headers.append('Authorization', this.authToken);

    return this.http.delete('http://localhost:3000/api/cart/delete-item/' + id, {headers: headers})
      .map(res => res.json());
  }

  /**
   * Clears the cart of all entries
   */
  deleteAll() {
    this.loadToken();

    const headers = new Headers();
    headers.append('Authorization', this.authToken);

    return this.http.delete('http://localhost:3000/api/cart/delete-all', {headers: headers})
      .map(res => res.json());
  }

  /**
   * Gets the token from local storage
   */
  loadToken() {
    const token = localStorage.getItem('token');
    this.authToken = token;
  }

}
