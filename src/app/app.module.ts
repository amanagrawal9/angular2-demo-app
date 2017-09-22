import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {HeaderComponent} from "./header/header.component";
import {ProductListComponent} from "./product/product-list.component";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {ProductService} from "./services/product.service";
import {InMemoryDataService} from "./services/in-memory-data.service";
import {ProductDetailComponent} from "./product/product-detail.component";
import {ProductCreateComponent} from "./product/product-create.component";
import {AppRoutingModule} from "./app-routing.module";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ContactUSComponent} from "./contactus/contactus.component";

@NgModule({
  imports:      [ BrowserModule, InMemoryWebApiModule.forRoot(InMemoryDataService), HttpModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HeaderComponent, ProductListComponent, ProductDetailComponent,
                  ProductCreateComponent, DashboardComponent, ContactUSComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ ProductService ]
})
export class AppModule { }
