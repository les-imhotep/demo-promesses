import { Injectable } from "@angular/core";
import { Post } from "./post";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PostService {
  constructor(private _http: HttpClient) {}

  list(): Promise<Post[]> {
    return this._http
      .get("https://jsonplaceholder.typicode.com/posts/")
      .toPromise()
      .then((data: any[]) => data.map(d => new Post(d.id, d.title, d.body)));
    /*
    return Promise.resolve([
      new Post(1, "titre 1", "body 1"),
      new Post(2, "titre 2", "body 2")
    ]);
    */
  }
}
