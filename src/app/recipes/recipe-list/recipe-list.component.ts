import { Component, OnInit } from '@angular/core';
import { Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
      new Recipe ('A Test Recipe', 'this is a text recipe', 'http://weclipart.com/gimg/7BFD8A19DF89EA32/1-retro-cookbook-clipart9.jpg')
    ];
  constructor() { }

  ngOnInit() {
  }

}
