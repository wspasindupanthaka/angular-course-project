import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipe.model";
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipe: Recipe = new Recipe('Name', 'Desc', '',
  [
    new Ingredient('Egg',2),
    new Ingredient('Rottee',4)
  ]);

  constructor(private recipeService: RecipesService) {}

  ngOnInit() {}

  addToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.selectedRecipe.ingredients);
  }
}
