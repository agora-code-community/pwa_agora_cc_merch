import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductService {

  constructor(private http: Http) { }

// removed http://localhost:3000 on all routes for deployments sake

  /**
   * Gets all products from db
   */
  getProducts() {
    return this.http.get('api/products/')
      .map(res => res.json());
  }

  /**
   * Requests for a single product
   * @param id The id of the product to be retrieved
   */
  getSingleProduct(id) {
    return this.http.get('api/products/' + id)
      .map(res => res.json());
  }

  /**
   * Sends a post request to create a product and save it
   * to the db
   * @param data is the form data to be posted
   */
  saveProduct(data) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json'); // not really needed but wont get rid of them just yet
    // removed the header
    return this.http.post('api/products/create', data)
      .map(res => res.json());
  }

  /**
   * Sends a request to update a product
   * @param id The id of the product being updated
   * @param fData the updated info to be stored
   */
  updateProduct(id, fData) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put('api/products/update/' + id, fData, {headers: headers})
      .map(res => res.json());
  }

  /**
   * Deletes a product
   * @param id The id of a product to be deleted
   */
  deleteProduct(id) {
    return this.http.delete('api/products/delete/' + id)
      .map(res => res.json());
  }

}
