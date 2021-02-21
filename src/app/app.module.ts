import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RecipesComponent } from './recipes/recipes.component';
import { HttpClientModule} from '@angular/common/http';
import { EachRecipeComponent } from './each-recipe/each-recipe.component'



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RecipesComponent,
    EachRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
