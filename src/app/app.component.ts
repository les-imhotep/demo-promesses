import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1>Hello</h1>
    <app-liste-posts></app-liste-posts>
  `,
  styles: []
})
export class AppComponent {
  title = "demo-promesses";
}
