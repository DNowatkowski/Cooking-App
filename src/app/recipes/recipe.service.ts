import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {

  recipeSelected =new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'test', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F20%2F212721-Indian-Chicken-Curry-Murgh-Kari-mfs_004.jpg'),
    new Recipe('Another test recipe', 'test', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F20%2F212721-Indian-Chicken-Curry-Murgh-Kari-mfs_004.jpg')

  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
