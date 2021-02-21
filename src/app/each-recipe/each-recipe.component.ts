import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-each-recipe',
  templateUrl: './each-recipe.component.html',
  styleUrls: ['./each-recipe.component.css']
})
export class EachRecipeComponent implements OnInit {
@Input() recipe_data:any={}
  constructor() { }

  ngOnInit(): void {
  }

}
