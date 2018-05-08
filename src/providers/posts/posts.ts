import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostsProvider {

  // URL del servicio de posts
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(public http: HttpClient) {
  }

  /**
   * Método empleado para obtener los posts.
   */
  getPots(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

}
