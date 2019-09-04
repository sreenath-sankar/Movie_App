import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { favourites } from './favourites';

@Injectable({
  providedIn: 'root'
})
export class FavService {

  public url = 'http://localhost:3004/favourites';
  constructor(private http: HttpClient) { }
  getFavourites(){
    return this.http.get(this.url);
  }
  addFavourites(movie){
    let fav: favourites = new favourites();
    fav.id = movie.id;
    fav.poster_path = movie.poster_path;
    fav.title = movie.original_title;
    fav.overview = movie.overview;
    fav.rating = movie.vote_average;
    fav.comments = "";
    return this.http.post(this.url, fav, {headers: new HttpHeaders({'Content-Type':  'application/json',})});
  }
    deleteFavourites(id) {
      return this.http.delete(this.url + "/" + id, {headers: new HttpHeaders({'Content-Type':  'application/json',})});
    }
    addComment(movie) {
      return this.http.put(this.url + "/" + movie.id, movie, {headers: new HttpHeaders({'Content-Type':  'application/json',})});
    }

}
