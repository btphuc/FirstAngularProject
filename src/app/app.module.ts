import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// header
import {HeaderComponent} from './Header/header.component';

// shopping list
import {ShoppinglistComponent} from './ShoppingList/shoppinglist.component';
import {ShoppinglistitemComponent} from './ShoppingList/ShoppingListItem/shoppinglistitem.component';
import {ShoppinglisteditComponent} from './ShoppingList/ShoppingListEdit/shoppinglistedit.component';

// recipe book
import {RecipebookComponent} from './RecipeBook/recipebook.component';
import {RecipeitemComponent} from './RecipeBook/RecipeItem/recipeitem.component';
import {RecipedetailComponent} from './RecipeBook/RecipeDetail/recipedetail.component';
import {RecipelistComponent} from './RecipeBook/RecipeList/recipelist.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppinglistComponent,
    ShoppinglisteditComponent,
    ShoppinglistitemComponent,
    RecipelistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
