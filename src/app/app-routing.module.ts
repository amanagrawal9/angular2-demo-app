import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from "./app.component";
import {ProductDetailComponent} from "./product/product-detail.component";
import {ProductListComponent} from "./product/product-list.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProductCreateComponent} from "./product/product-create.component";
import {ContactUSComponent} from "./contactus/contactus.component";

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'products',     component: ProductListComponent },
    { path: 'product-detail/:id', component: ProductDetailComponent },
    { path: 'edit-product/:id', component: ProductCreateComponent },
    { path: 'create-product', component: ProductCreateComponent },
    { path: 'contact-us', component: ContactUSComponent },

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}