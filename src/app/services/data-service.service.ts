import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  // private url = 'https://jsonplaceholder.typicode.com';
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAll() {
    // return this.http.get(this.url + '/photos');
    return this.http.get(this.url + '/api/posts');
  }

  get(id) {
    // return this.http.get(this.url + '/photos/' + id);
    return this.http.get(this.url + '/api/posts/' + id);
  }

  createPost(data) {
    return this.http.post(this.url + '/api/posts/',  data);
  }

}
