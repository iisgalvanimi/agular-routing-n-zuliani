import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-topartists',
  templateUrl: './topartists.component.html',
  styleUrls: ['./topartists.component.css']
})
export class TopartistsComponent implements OnInit {

  obsTrack: Observable<Object>;
  results: any;

  constructor(public spotify: SpotifyService) { }

  ngOnInit(): void {
    this.obsTrack = this.spotify.getArtists();
    this.obsTrack.subscribe((data) => { this.results = data; console.log(data) });
  }

}
