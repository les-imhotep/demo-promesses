import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ListePostsComponent } from "./liste-posts/liste-posts.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, ListePostsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
