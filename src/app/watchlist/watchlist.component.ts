import { Component, OnInit } from '@angular/core';
import { FavService } from '../fav.service';
import { favourites } from '../favourites';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  constructor(private _getFav: FavService, private router: Router) { }
  public favoritesList: favourites[];
  ngOnInit() {
    this._getFav.getFavourites().subscribe(res => this.favoritesList =
      res as favourites[]);

  }
  removeFav(id) {
    this._getFav.deleteFavourites(id).subscribe();
    this.ngOnInit();
  }
  addComm(value, movie) {
    movie.comments=value;
    console.log(movie.comments);
    this._getFav.addComment(movie)
                .subscribe();
  }
}

