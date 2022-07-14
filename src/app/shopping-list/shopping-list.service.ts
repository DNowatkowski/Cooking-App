import { Ingredient } from "../shared-folder/ingredient-model";
import { EventEmitter } from "@angular/core";
export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  IngredientsChanged = new EventEmitter<Ingredient[]>();
 // IngredientDeleted = new EventEmitter<Ingredient>();
 // IngredientModified = new EventEmitter<Ingredient[]>();

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.IngredientsChanged.emit(this.ingredients);
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.IngredientsChanged.emit(this.ingredients.slice());
  }


  getIngredients() {
    return this.ingredients.slice();
  
  }

}

