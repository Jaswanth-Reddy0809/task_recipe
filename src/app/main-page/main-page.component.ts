
import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { RecipesComponent } from '../recipes/recipes.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  constructor(private recipe:RecipesService) {
   
   }

  ngOnInit(): void {
    
  }
  recipes(value:string)
  {
    this.recipe.search_string=value
    console.log(this.recipe.search_string)
  }
  


}
