import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public movieId;
  public movie={};
  constructor(private route: ActivatedRoute, private _movieService: MovieService){ }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.movieId = id;
    this. _movieService.getDetails(this.movieId)
                       .subscribe((data={}) => this.movie=data)
  }
}
