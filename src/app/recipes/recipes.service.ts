import { Injectable, EventEmitter, Output } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: "root"
})
export class RecipesService {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      "Egg Kottu",
      "Test Description",
      "http://www.houseofcurrymn.com/wp-content/uploads/2015/06/chicken.jpg",
      [new Ingredient("Egg", 2), new Ingredient("Rottee", 4)]
    ),
    new Recipe(
      "Chicken Kottu",
      "Test Description",
      "http://www.houseofcurrymn.com/wp-content/uploads/2015/06/chicken.jpg",
      [
        new Ingredient("Egg", 2),
        new Ingredient("Rottee", 4),
        new Ingredient("Chicken", 50)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientsToShoppingList(ingredients);
  }
}
