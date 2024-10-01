import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, NgForm } from '@angular/forms';
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



@NgModule({
    declarations: [
        AppComponent,
        CategoryComponent,
        ProductComponent,
        NavBarComponent,
        HomeComponent,
        ServiceComponent,
        SubServiceComponent,
        SubscriptionComponent
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
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
