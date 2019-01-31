import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from './types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'https://api.angularbootcamp.com';

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {

  constructor(private http: HttpClient) { }

  loadVideos(): Observable<Video[]> {
    return this.http
      .get<Video[]>(API_URL + '/videos')
      .pipe(map(videos => videos.slice(0, 5)));
  }
}
