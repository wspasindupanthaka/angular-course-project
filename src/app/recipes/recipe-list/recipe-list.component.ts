import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe','Test Description','https://media-cdn.tripadvisor.com/media/photo-s/0f/02/0f/2d/sri-lankan-authentic.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
