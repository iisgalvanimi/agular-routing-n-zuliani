import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token: string = "BQDw7FYIVKaR4Cw7QIe5WwJ-duEjxQngZG8cCuIQFGgYU_QOHJP6fSXNYNSxBvo7_35IAOlAKTNFNvUyQub_CHkiBH2QoEnhT5WvPfwu3d4APBvn9Lpg03tR1jkdnNZMccEo9rTn1tv4wQ7-sGoo7Cgu1ANf5ZM";

  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization: environment.oauthToken
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
  }

  getTrack(id: string) {
    return this.requestAPI(id, "tracks");
  }

  getAlbum(id: string) {
    return this.requestAPI(id, "albums");
  }

  getArtist(id: string) {
    return this.requestAPI(id, "artists");
  }

  requestAPI(id: string, searchType: string){
    const url = `https://api.spotify.com/v1/${searchType}/${id}`;
    const headers = new HttpHeaders({
      Authorization: environment.oauthToken
    });

    return this.http.get(url, { headers });
  }
}
