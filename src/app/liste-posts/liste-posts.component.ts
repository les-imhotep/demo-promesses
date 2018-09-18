import { Component, OnInit } from "@angular/core";
import { PostService } from "../post.service";
import { Post } from "../post";

@Component({
  selector: "app-liste-posts",
  template: `
   <ul>
      <li *ngFor="let p of posts">{{p.id}} / {{p.title}}</li>
   </ul>
   <p *ngIf="err">Erreur {{err}} </p>
  `,
  styles: []
})
export class ListePostsComponent implements OnInit {
  posts: Post[] = [];

  err: string;

  constructor(private _postSrv: PostService) {}

  ngOnInit() {
    this._postSrv
      .list()
      .then(tabPosts => (this.posts = tabPosts))
      .catch(err => (this.err = err));
  }
}
