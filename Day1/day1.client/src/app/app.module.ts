import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { SubServiceComponent } from './sub-service/SubServiceComponent';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    NavBarComponent,
    HomeComponent,
    ServiceComponent,
    SubServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "Category", component: CategoryComponent },
      { path: "Product", component: ProductComponent },
      { path: "Service", component: ServiceComponent },
      { path: "SubServiceByServiceId/:id", component: SubServiceComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
