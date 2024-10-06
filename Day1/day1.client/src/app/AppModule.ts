import { HttpClientModule } from "@angular/common/http";
import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CategoryComponent } from "./category/category.component";
import { HomeComponent } from "./home/home.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { ProductComponent } from "./product/product.component";
import { ServiceComponent } from "./service/service.component";
import { SubServiceComponent } from "./sub-service/SubServiceComponent";
import { DetailsComponent } from "./details/details.component";
import { SubscriptionComponent } from "./subscription/subscription.component";
import { RegisterComponent } from "./register/register.component";
import { LogInComponent } from "./log-in/log-in.component";
import { DashboardComponent } from "./AdminDash/dashboard/dashboard.component";
import { AddServiceComponent } from "./AdminDash/add-service/add-service.component";




@NgModule({
    declarations: [
        AppComponent,
        CategoryComponent,
        ProductComponent,
        NavBarComponent,
        HomeComponent,
        ServiceComponent,
        SubServiceComponent,
        SubscriptionComponent,
        RegisterComponent,
        LogInComponent,
        DashboardComponent,
        AddServiceComponent,
    ],
    imports: [
        FormsModule,
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        RouterModule.forRoot([
            { path: "", component: HomeComponent, pathMatch: "full" },
            { path: "Category", component: CategoryComponent },
            { path: "Product", component: ProductComponent },
            { path: "Service", component: ServiceComponent },
            { path: "SubServiceByServiceId/:id", component: SubServiceComponent },
          { path: "DetailsToSubServiceId/:id", component: DetailsComponent },
          { path: "Subscription", component: SubscriptionComponent },
          { path: "CreateNewAccount", component: RegisterComponent },
          { path: "LogIn", component: LogInComponent },
          {
            path: "Dashboard", component: DashboardComponent, children: [
              { path: "AddService", component: AddServiceComponent }
            ]
          }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
