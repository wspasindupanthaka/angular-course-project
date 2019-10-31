import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe','Test Description','http://www.houseofcurrymn.com/wp-content/uploads/2015/06/chicken.jpg'),
    new Recipe('A Test Recipe','Test Description','http://www.houseofcurrymn.com/wp-content/uploads/2015/06/chicken.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
