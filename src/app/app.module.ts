import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { NgxImagesloadedModule } from "ngx-imagesloaded";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, NgxImagesloadedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
