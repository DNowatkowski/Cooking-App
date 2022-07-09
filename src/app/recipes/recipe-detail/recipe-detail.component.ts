import { Renderer2 } from "@angular/core";
import { Component, Input } from "@angular/core";
import { DropdownDirective } from "../../shared-folder/dropdown.directive";
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl:'recipe-detail.component.html'
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;

  constructor() {}
  ngOnInit() {
    
  }

  onClick() {

  }
}
