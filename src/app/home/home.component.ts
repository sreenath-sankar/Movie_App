import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies=[];
  constructor(private _movieService: MovieService) { }

  ngOnInit() {
    this. _movieService.getMovies()
                       .subscribe((data={}) => this.movies=data)
  }

}
