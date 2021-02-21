import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  search_string:String=""
  

  constructor(private http:HttpClient) { }
  getData():Observable<Array<object>>
  {
    return this.http.get<Array<Object>>(`https://api.edamam.com/search?q=${this.search_string}&app_id=084af306&app_key=9b7c805579ddf782901ac8144d9dc738`)
  }
}

