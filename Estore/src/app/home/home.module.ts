import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { CatnavigationComponent } from './components/catnavigation/catnavigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidenavigationComponent } from './components/sidenavigation/sidenavigation.component';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import { CategoryService } from './services/category.service';
import { CategoriesStoreItem } from './services/categories.storeItem';

@NgModule({
  declarations: [
    HomeComponent ,//let's access this component using routes.
                  //Set it as a default component displayed when the site is loaded.
    HeaderComponent,
    CatnavigationComponent,
    SidenavigationComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,FontAwesomeModule,SharedModule,HttpClientModule
  ],
  providers:[CategoryService,CategoriesStoreItem]
})
export class HomeModule { }
