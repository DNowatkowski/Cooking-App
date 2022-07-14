import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared-folder/ingredient-model";
import { Recipe } from "./recipe.model";

export class RecipeService {
  
  recipeSelected =new EventEmitter<Recipe>();

  private recipes: Recipe[] =
    [
      new Recipe(
      'Oat meal',
      'Oats with peanut butter',
        'https://static.onecms.io/wp-content/uploads/sites/44/2021/07/09/banana-oatmeal.jpg',
        [new Ingredient('oats', 150),
          new Ingredient('peanut butter', 30),
          new Ingredient('bannana', 1)]),

          new Recipe(
            'Chicken with rice',
            'Tasty chicken with delicious soy sauce and nutrtitious rice',
            'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/13385.jpg?resize=1200:*',
            [new Ingredient('chicken', 150),
            new Ingredient('rice', 100),
            new Ingredient('soy sauce', 1)])
    ];
  

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(id: number) {
    return this.recipes[id];
  }
}
