import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {

  constructor(private http: Http) { }

  /**
   * Gets all categories from db
   */
  getCategories() {
    return this.http.get('http://localhost:3000/api/categories/')
      .map(res => res.json());
  }

  /**
   * Requests a single category for the db
   * @param id The request category's id
   */
  getCategory(id) {
    return this.http.get('http://localhost:3000/api/categories/' + id)
      .map(res => res.json());
  }

  /**
   * Sends the category-form data to the db for insert
   * @param data 
   */
  saveCategory(data) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/api/categories/create', data, {headers: headers})
      .map(res => res.json());
  }

  /**
   * Sends an update request to the api to update the details
   * of a category
   * @param id The id belonging to the cataegory to be updated
   * @param data The data of the posted form
   */
  updateCategory(id, data) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put('http://localhost:3000/api/categories/update/' + id, data, {headers: headers})
      .map(res => res.json());
  }

  /**
   * Sends a request to delete a particular category
   * @param id The id of the category to be deleted
   */
  deleteCategory(id) {
    return this.http.delete('http://localhost:3000/api/categories/delete/' + id)
      .map(res => res.json());
  }


}
