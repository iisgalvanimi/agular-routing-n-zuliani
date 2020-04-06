import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAwmeTEniBBiVT7V8pIj-UbtLGxvuWcfaJLK58UpuUd656zInysSBdoImp8Q14CetoSHP6Mkkis6kJabF-V1gMulr5Hib4xnkWICSltFDlYsc94M0Hq5GR96NVbZiZjJSJtZrBNYXa6f41xvox82zsTReP_TEM'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
  }
}
