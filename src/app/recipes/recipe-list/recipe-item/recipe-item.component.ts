import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeItem: Recipe;


  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
  }

  onSelected() {
   this.recipeService.recipeSelected.emit(this.recipeItem);
  }

}
