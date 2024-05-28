import { Component, OnDestroy } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../types/category.type';
import {  } from '@angular/core';
import { CategoriesStoreItem } from '../../services/categories.storeItem';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.scss']
})
export class SidenavigationComponent implements OnDestroy  {

  categories: Category[] = [];
  subscriptions:Subscription=new Subscription();

  constructor(categoryStore: CategoriesStoreItem) {
   this.subscriptions.add(categoryStore.categories$.subscribe((categories)=>{
    this.categories=categories;
   })) 
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getCategories(parentCategoryId?: number): Category[] {
    return this.categories.filter(
      (category) => parentCategoryId?category.parent_category_id===parentCategoryId:category.parent_category_id===null
    );
  }
}

