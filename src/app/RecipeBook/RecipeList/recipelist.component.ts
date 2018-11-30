import {Component} from '@angular/core';
import { Recipe } from '../recipe.model.ts'

@Component({
  selector: 'app-recipe-list',
  templateUrl: '../recipelist.component.html'
})

export  class RecipelistComponent {
  recipes: Recipe[]  = [
    new Recipe('A Test Recipe', 'This is a test recipe', 'https://api.norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_007.jpg')
  ];

}
