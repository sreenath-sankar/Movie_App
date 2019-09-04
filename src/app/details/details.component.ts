import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { FavService } from '../fav.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public movieId: number;
  public movie={};
  public flag ;
  constructor(private route: ActivatedRoute, private _movieService: MovieService, private fav: FavService){ }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.movieId = id;
    this. _movieService.getDetails(this.movieId)
                       .subscribe(data => this.movie=data);
    this._movieService.checkFav(this.movieId)
                                .subscribe(_checkFav => this.flag = true, error => this.flag = false);
                       
  }
  addFav() {
    this.fav.addFavourites(this.movie).subscribe();
    this.ngOnInit();
  }

}
