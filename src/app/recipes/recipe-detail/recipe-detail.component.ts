
import { Component } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { ShoppingListService } from "../../shopping-list/shopping-list.service";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl:'recipe-detail.component.html'
})
export class RecipeDetailComponent {
  recipe: Recipe;
  id: number;
  constructor(
    private shoppingListService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipeById(this.id);
        });

  }
  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }


  toShoppingList() {
    this.shoppingListService.addIngredients(this.recipeService.getRecipeById(this.id).ingredients);
   // this.shoppingListService.addIngredients(this.recipe.ingredients);
  }
}
