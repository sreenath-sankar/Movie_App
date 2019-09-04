import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies=[];
  constructor(private _movieService: MovieService, private router: Router) { }

  ngOnInit() {
    this. _movieService.getMovies()
                       .subscribe((data={}) => this.movies=data)
  }
  logSearch(value){
   this.router.navigate(['/search',{name: value}]);
  }

}
