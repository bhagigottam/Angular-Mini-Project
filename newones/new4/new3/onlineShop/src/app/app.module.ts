import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderpartComponent } from './headerpart/headerpart.component';
import {MatButtonModule} from '@angular/material/button';
import { ProductCardComponent } from './product-card/product-card.component';
import { LeftItemComponent } from './left-item/left-item.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {NgbDropdownModule, } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FeaturespecificComponent } from './featurespecific/featurespecific.component';
import { CartComponent } from './cart/cart.component';
import { NgxPaginationModule } from 'ngx-pagination';
// import { JwPaginationComponent } from "./packages/jw-angular-pagination/lib/jw-pagination.component"
// import { JwPaginationComponent } from 'jw-angular-pagination';
// import { JwPaginationModule } from 'jw-angular-pagination';
// import {  } from 'jw-angular-pagination';
@NgModule({
  declarations: [
    AppComponent,
    HeaderpartComponent,
    ProductCardComponent,
    LeftItemComponent,
    HomeComponent,
    FeaturespecificComponent,
    CartComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTreeModule,
    MatIconModule,
    MatExpansionModule,
    NgbDropdownModule,
    MatButtonToggleModule,
    NgxPaginationModule,
    
    
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
