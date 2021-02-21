import { Component, Injectable, Input, OnInit } from '@angular/core';
import {RecipesService} from '../recipes.service'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
@Injectable()
export class RecipesComponent implements OnInit {
  data:any={}
  constructor(private recipe:RecipesService) { 
  }

  ngOnInit(): void {
    this.recipe.getData().subscribe((temp:any)=>{
      this.data=temp.hits
      console.log(this.recipe.search_string)
      console.log(this.data)
    })
  
    
  }
}
